import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        backgroundColor: "#F5F5F5",
        pb: "5rem",
      }}
    >
      <Box
        sx={{
          pt: "4rem",
          width: "100%",
          px: "2.5rem",
          width: {
            md: "75%",
          },
        }}
      >
        <Typography variant="h3" component="div" sx={{
            mb:"2.5rem",
        }}>
          About Us
        </Typography>

        <Box>
            <Typography variant="subtitle1">Welcome to ZUMAXAA! Our experienced and caring team is dedicated to providing exceptional dental care in a warm and friendly environment. We offer comprehensive services using the latest technology to ensure accurate diagnoses and effective treatments.</Typography> <br />
            <Typography variant="subtitle1">With a focus on preventive care and patient education, we empower you to make informed decisions about your oral health. Contact us today for a positive and stress-free dental experience.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
