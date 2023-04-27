import StarIcon from "@mui/icons-material/Star";
import { render } from "@testing-library/react";
import React from "react";


const RenderStars = (score, setScore, fontSize) => {
    const stars = [];
    for(let i=1; i<=score; i++) {
        stars.push(<span onClick = {() => setScore(i)}><StarIcon color={'primary'} fontSize={fontSize ?? 'large'}/></span>);
    }
    for(let i=score+1; i<=5; i++) {
        stars.push(<span onClick = {() => setScore(i)}><StarIcon color={'disabled'} fontSize={fontSize ?? 'large'}/></span>);
    }
    
    return (
        <span>
            {
                stars.map((starIcon) => (
                    starIcon
                ))
            }
        </span>
    )
}

export default RenderStars;
