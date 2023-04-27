import React, {useEffect} from 'react';
import Chip from '@mui/material/Chip'
import styles from './ContentBox.module.css';
import {renderTitle} from "./Title"
import { renderChips } from './Chips';

const ContentBox = ({imgUrl, name, rating, summary, chipName}) => {
    return(
        <div className= {styles.MainContent}>
            <div className={styles.Content}>
            <img src={imgUrl} className={styles.mainImg}></img>
            <div className={styles.substance}>
                <div>{renderTitle(name, rating)}</div>
                <div className={styles.Summary}>
                    {summary}
                </div>
                <div className={styles.Tags}>
                    {renderChips}
                </div>
            </div>
            </div>
      </div>

        
    );
}

export default ContentBox;