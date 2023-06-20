import { Box, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import Rating from "@mui/material/Rating";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Reviews = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: '100%',
      }}
    >
      <Box sx={{
        width: '40%',
      }}>
        <Typography variant="h3" component="div" sx={{ mb: "2.5rem" }}>
          Kind Words from our Customers
        </Typography>

        <Rating value="5" />
        <a href="https://www.google.com/search?q=zumaxaa&oq=zumaxaa&aqs=chrome..69i57.1505j0j4&sourceid=chrome&ie=UTF-8#lrd=0x390d091bd62f918b:0x6898d259594a4f53,1,,,,">
        <Typography component="div">160+ reviews</Typography>
        </a>
      </Box>

      <Box sx={{
        width: '60%',
      }}>
            
      </Box>
    </Box>
  );
};

export default Reviews;
