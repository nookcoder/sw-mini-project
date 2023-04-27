import React, {useEffect, useState} from 'react';
import {getComments} from "../../modules/firebase/reader";
import CommentBox from "./CommentBox";
import {CircularProgress} from "@mui/material";

const CommentsContainer = () => {
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
        <div>
            {
                comments ? comments.map((comment,index) => (
                    <div key={index}>
                        <CommentBox
                            comment={comment.comment}
                            score={comment.score}
                        />
                    </div>
                )) : <CircularProgress></CircularProgress>
            }
        </div>
    );
};

export default CommentsContainer;
