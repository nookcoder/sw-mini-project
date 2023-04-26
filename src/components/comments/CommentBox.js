import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";
import {renderStars} from "./Starts";
import styles from './CommentBox.module.css';

const CommentBox = () => {

    return (
        <div className={styles.container}>
            <section className={styles.box}>
                <Avatar>
                    <PersonIcon/>
                </Avatar>

                <div className={styles.right_column}>
                    <div>익명1</div>
                    <div className={styles.stars_row}>
                        <div>{renderStars(3, "small")}</div>
                        <div className={styles.stars_row_text}>3.0</div>
                    </div>
                </div>
            </section>

            <section className={styles.comment_box}>
                <span className={styles.comment}>이번 강의를 듣고 수면패턴이 확 달라졌어요</span>
            </section>
        </div>
    );
};

export default CommentBox;
