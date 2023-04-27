import React, {useEffect} from 'react';

import styles from './Title.module.css';
import StarIcon from "@mui/icons-material/Star";

export function renderTitle(name, rating) {
    return(
        <div className={styles.Title}>
            <text className={styles.TitleName}>{name}</text>
            <StarIcon color={'primary'} fontSize={"large"}/>
            <text className={styles.Rating}>{rating}</text>
        </div>
    )
}


