import Chip from '@mui/material/Chip'

import styles from './Chips.module.css';



export function renderChips(chips){
    return(
        <div>
        {chips.map((dish) => (
            <Chip className={styles.Chip} label={dish.name} component="a" href="#basic-chip" clickable  />

        ))}    
        </div>
    )

}