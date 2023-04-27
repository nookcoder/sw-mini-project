import React, {useEffect} from 'react';

import styles from './Title.module.css';


export function renderTitle(name, rating) {
    return(
        <div className={styles.Title}>
            <text className={styles.TitleName}>{name}</text>
            <img src='img/star2.svg' className={styles.titleStar}></img>
            <text className={styles.Rating}>{rating}</text>
        </div>
    )
}


