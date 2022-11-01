import React from "react";
import DoubleButton from "./DoubleButton";
import {Box} from '@mui/material';

export default function HeaderHero(){
    return(
        <Box sx={{
            backgroundImage: "url(http://localhost:3000/assets/img/road-bike.png)", 
            backgroundRepeat: "no-repeat",
            height: "580px",
            backgroundSize: "100% 100%",
            marginTop: '-100px',
            '@media (max-width: 600px)': {
                marginTop: '-145px',
                height: '480px'
            } 
            }}>
            <DoubleButton/>
        </Box>
    )
}