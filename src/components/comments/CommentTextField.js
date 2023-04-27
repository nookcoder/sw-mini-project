import React, {useState} from 'react';
import styles from './CommentTextField.module.css';
import {Button} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import RenderStars from "./Stars";

const CommentTextField = () => {
    const [score, setScore] = useState(0);
    return (
        <div className={styles.container}>
            <div className={styles.title}>기술 평가</div>
            <div className={styles.total_description}>
                <span>{RenderStars(score, setScore)}</span>
                <span className={styles.total_score}>{score}.0</span>
                <span className={styles.divider}></span>
                <span className={styles.total_score}>5개 평가</span>
            </div>
            <div className={styles.text_field_box}>
                <input className={styles.input_styles} placeholder={'평가를 입력해주세요'}/>
                <Button variant={'contained'}>평가작성</Button>
            </div>
        </div>
    );
    
};

export default CommentTextField;
