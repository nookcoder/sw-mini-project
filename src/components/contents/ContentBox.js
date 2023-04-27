import React, {useEffect} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";
import styles from './ContentBox.module.css';
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";

const ContentBox = ({imgUrl}) => {
    return(
        <div className= {styles.MainContent}>
            <div className={styles.Content}>
            <img src='img/logo192.png'  id='mainImg'></img>
            <div className='substance'>
                <div className='Title'>
                <text className='TitleName'>React</text>
                {/*<img src='img/star2.svg' id='titleStar'></img>*/}
                    <span><StarIcon color={'primary'} fontSize={"large"}/></span>
                <text className='Rating'>4.68</text>
                </div>
                <div className='Summary'>
                    This package provides a wrapper around Dart implementations of SVG parsing, including SVG path data. In particular, it provides efficient BytesLoader implementations for package:vector_graphics. This package is easier to use but not as performant as using the vector_graphics and vector_graphics_compiler packages directly. Those packages allow you to do ahead-of-time compilation and optimization of SVGs, and offer some more performant rasterization strategies at runtime.
                </div>
                <div className='Tags'>
                <Chip id='Chip' label="Django" component="a" href="#basic-chip" variant="outlined" clickable  />
                <Chip id='Chip' label="Django" component="a" href="#basic-chip" clickable />

                <Chip id='Chip' label="Django" component="a" href="#basic-chip" clickable />
                </div>
            </div>
            </div>
      </div>


    );
}

export default ContentBox;
