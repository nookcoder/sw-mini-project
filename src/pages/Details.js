import React from 'react';
import {useParams} from "react-router";
import styles from '../styles/Detail.module.css';
import CommentTextField from "../components/comments/CommentTextField";
import CommentsContainer from "../components/comments/CommentsContainer";
import {useEffect, useState} from "react";
import {getComments} from "../modules/firebase/reader";
import {Button} from "@mui/material";
import {Header} from "./App";
import ContentBox from "../components/contents/ContentBox";
import {contents} from '../components/contents/Contents';

const Details = () => {
    const {type} = useParams();
    const [comments, setComments] = useState([]);
    const [isInit, setIsInit] = useState(false);

    const initComments = async () => {
        const commentsFromDB = await getComments(type);
        for (let comment in commentsFromDB) {
            comments.push(commentsFromDB[comment]);
        }

        comments.reverse();
        setComments(comments);
        setIsInit(true);
    }

    const getTotalScore = () => {
        let totalScore = 0;
        for (const co of comments) {
            totalScore += co.score;
        }
        if (totalScore === 0) {
            return "0.0";
        }
        return (totalScore / comments.length).toFixed(2);
    }

    const onClickTest = () => {
        console.log(getTotalScore());
    }

    useEffect(() => {
        if(!isInit) {
            initComments();
        }
        console.log(contents[type].name);
    },[isInit])

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <ContentBox
                        imgUrl={contents[type].imageUrl}
                        name={contents[type].name}
                        summary={contents[type].summary}
                        rating={getTotalScore()}
                        chipName={contents[type].chips}
                    />
                    <CommentTextField
                        setComments={setComments}
                        type={type}
                        comments={comments}
                    />
                    <CommentsContainer
                        comments={comments}
                    />
                </div>
            </div>
        </>
    );
};

export default Details;
