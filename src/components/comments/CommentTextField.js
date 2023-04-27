import React, {useState} from 'react';
import styles from './CommentTextField.module.css';
import {Button} from "@mui/material";
import RenderStars from "./Stars";
import {writeComments} from "../../modules/firebase/writer";
import {getComments} from "../../modules/firebase/reader";

const CommentTextField = ({setComments, type}) => {
    const [starCount, setStartCount] = useState(0);
    const [comment, setComment] = useState();
    const onChangeComment = (event) => {
        const value = event.target.value;
        setComment(value);
    }

    const sendComments = async () => {
        await writeComments(starCount, comment, type);
        setComment("");
        const commentsFromDB = await getComments(type);
        const comments = []
        for (let comment in commentsFromDB) {
            comments.push(commentsFromDB[comment]);
        }

        comments.reverse()
        setComments(comments);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>기술 평가</div>
            <div className={styles.total_description}>
                <span>{RenderStars(starCount, setStartCount)}</span>
                <span className={styles.total_score}>{starCount}.0</span>
                <span className={styles.divider}></span>
                <span className={styles.total_score}>5개 평가</span>
            </div>
            <div className={styles.text_field_box}>
                <input className={styles.input_styles} placeholder={'평가를 입력해주세요'} value={comment} onChange={onChangeComment}/>
                <Button variant={'contained'} onClick={sendComments}>평가작성</Button>
            </div>
        </div>
    );
};

export default CommentTextField;
