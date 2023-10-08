import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const SmileDesigningDetails = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFEFE",
        my: "82px",
      }}
    >
      <Box
        sx={{
          width: { xs: "90vw", md: "85vh" },
          height: "100vh",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: "#242525",
            width: "100%",
            textAlign: "left",
            my: "20px",
            fontWeight: "bold",
          }}
        >
          Smile Designing
        </Typography>
        
      </Box>
    </Box>
  );
};

export default SmileDesigningDetails;
