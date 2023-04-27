import React from 'react';
import {useParams} from "react-router";
import styles from '../styles/Detail.module.css';
import CommentTextField from "../components/comments/CommentTextField";
import CommentsContainer from "../components/comments/CommentsContainer";
import ContentBox from "../components/contents/ContentBox";
import {useEffect, useState} from "react";
import {getComments} from "../modules/firebase/reader";

const Details = () => {
    const {type} = useParams();
    const [isInit, setIsInit] = useState(false);
    const [comments, setComments] = useState([]);
    const initComments = async () => {
        if(comments.length > 0) {
            return;
        }
        const commentsFromDB = await getComments();
        for (let comment in commentsFromDB) {
            comments.push(commentsFromDB[comment]);
            setComments(comments);
        }
        setIsInit(true);
    }

    useEffect(() => {
        if(!isInit) {
            initComments();
        }
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <CommentTextField/>
                <CommentsContainer
                    comments={comments}
                />
            {/*<ContentBox/>*/}
            </div>
        </div>
    );
};

export default Details;
