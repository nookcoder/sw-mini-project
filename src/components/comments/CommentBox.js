import React, {useEffect} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";
import {renderStars} from "./StartsComments";
import styles from './CommentBox.module.css';

const CommentBox = ({score, comment, key}) => {
    return (
        <div className={styles.container}>
            <section className={styles.box}>
                <Avatar>
                    <PersonIcon/>
                </Avatar>

                <div className={styles.right_column}>
                    <div>익명1</div>
                    <div className={styles.stars_row}>
                        <div>{renderStars(score, "small")}</div>
                        <div className={styles.stars_row_text}>{score}.0</div>
                    </div>
                </div>
            </section>

            <section className={styles.comment_box}>
                <span className={styles.comment}>{comment}</span>
            </section>
        </div>
    );
};

export default CommentBox;
