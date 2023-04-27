import React, {useEffect, useState} from 'react';
import {getComments} from "../../modules/firebase/reader";
import CommentBox from "./CommentBox";
import {CircularProgress} from "@mui/material";

const CommentsContainer = ({comments}) => {
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
