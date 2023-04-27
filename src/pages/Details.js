import React from 'react';
import {useParams} from "react-router";
import styles from '../styles/Detail.module.css';
import CommentTextField from "../components/comments/CommentTextField";
import CommentsContainer from "../components/comments/CommentsContainer";
import {useEffect, useState} from "react";
import {getComments} from "../modules/firebase/reader";
import {Button} from "@mui/material";

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
        return (totalScore / comments.length).toFixed(2);
    }

    const onClickTest = () => {
        console.log(getTotalScore());
    }

    useEffect(() => {
        if(!isInit) {
            initComments();
        }
    },[isInit])

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {/*<ContentBox/>*/}
                <CommentTextField
                    setComments={setComments}
                    type={type}
                />
                <CommentsContainer
                    comments={comments}
                />
                <Button onClick={onClickTest}>Test</Button>
            </div>
        </div>
    );
};

export default Details;
