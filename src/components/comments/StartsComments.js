import StarIcon from "@mui/icons-material/Star";

export function renderStars(startCount, fontSize) {
    const starts = [];
    for(let i=0; i<startCount; i++) {
        starts.push(<span><StarIcon color={'primary'} fontSize={fontSize ?? 'large'}/></span>);
    }
    for(let i=0; i<5-startCount; i++) {
        starts.push(<span><StarIcon color={'disabled'} fontSize={fontSize ?? 'large'}/></span>);
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
