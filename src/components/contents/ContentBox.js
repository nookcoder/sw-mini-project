import React, {useEffect} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";
import {renderStars} from "./StartsComments";
import styles from './ContentBox.module.css';
import {renderTitle} from "./Title"

const ContentBox = ({imgUrl, name, rating, summary, chipName}) => {
    return(
        <div className= {styles.MainContent}>
            <div className={styles.Content}>
            <img src={imgUrl} className={styles.mainImg}></img>
            <div className={styles.substance}>
                {renderTitle(name, rating)}
                <div className={styles.Summary}>
                    {summary}
                </div>
                <div className={styles.Tags}>
                    <Chip className={styles.Chip} label={chipName} component="a" href="#basic-chip" clickable  />
                    <Chip className={styles.Chip} label={chipName} component="a" href="#basic-chip" clickable />
                    <Chip className={styles.Chip} label={chipName} component="a" href="#basic-chip" clickable />
                </div>
            </div>
            </div>
      </div>

        
    );
}

export default ContentBox;