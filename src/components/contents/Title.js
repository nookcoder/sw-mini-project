import React, {useEffect} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";
import {renderStars} from "./StartsComments";
import styles from './CommentBox.module.css';


const Title = ({name, rating}) => {
    return(
        <div className={styles.Title}>
            <text className={styles.TitleName}>{name}</text>
            <img src='img/star2.svg' className={styles.titleStar}></img>
            <text className={styles.Rating}>{rating}</text>
        </div>
    );
};

export default Title;