import React from 'react';
import { Paper, Typography } from '@mui/material';

interface CardProps {
 
  title: string;
  count: number; 
}
const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <Paper  elevation={3} sx={{border:"2px solid blue",height:"100px", width:"200px",}}>
       <Typography variant="h6">{title}</Typography>
      <Typography sx={{padding:4}} variant="body1">${count}</Typography>

    </Paper>
  );
};

export default Card;
