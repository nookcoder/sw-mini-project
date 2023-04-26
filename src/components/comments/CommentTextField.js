import React from 'react';
import styles from './CommentTextField.module.css';
import {Button} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const CommentTextField = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>기술 평가</div>
            <div className={styles.total_description}>
                <span>{renderStars(3)}</span>
                <span className={styles.total_score}>3.0</span>
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

function renderStars(startCount) {
    const starts = [];
    for(let i=0; i<startCount; i++) {
        starts.push(<span><StarIcon color={'primary'} fontSize={'large'}/></span>);
    }
    for(let i=0; i<5-startCount; i++) {
        starts.push(<span><StarIcon color={'disabled'} fontSize={'large'}/></span>);
    }
    return (
        <span>
            {
                starts.map((starIcon) => (
                    starIcon
                ))
            }
        </span>
    )

}

export default CommentTextField;
