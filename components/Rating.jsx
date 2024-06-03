'use client'
import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



export default function BasicRating() {
  const [value, setValue] = useState(null);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    
     
     
    </Box>
  );
}