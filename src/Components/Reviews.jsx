import { Box, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import Rating from "@mui/material/Rating";
import Carousel from "react-material-ui-carousel";
import RatingText from "./RatingText";


const Reviews = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: '100%',
        px: "2.5rem",
        py: "4rem",
        flexDirection:{
            xs: 'column',
            sm: 'row',
        }
      }}
    >
      <Box sx={{
        width: {
            md: '40%',
            xs: '80%',
        },
        mb: {
            xs: '5rem',
            sm: '0',
        }      
      }}>
        <Typography variant="h4" component="div" sx={{ mb: "2.5rem" }}>
          Kind Words from our Customers
        </Typography>

        <Rating value="5" />
        <a target="_blank" rel="noreferrer" href="https://www.google.com/search?q=zumaxaa&oq=zumaxaa&aqs=chrome..69i57.1505j0j4&sourceid=chrome&ie=UTF-8#lrd=0x390d091bd62f918b:0x6898d259594a4f53,1,,,,">
        <Typography variant="subtitle1" component="div">160+ reviews</Typography>
        </a>
      </Box>

      <Box sx={{
        width: {
            md: '60%',
            xs: '100%',
        },
      }}>
            <RatingText />
      </Box>
    </Box>
  );
};

export default Reviews;
