import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

const Services = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const data = [
    {
      id: 1,
      image: require("../assets/image/fmr.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 2,
      image: require("../assets/image/dental_implants.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 3,
      image: require("../assets/image/endodontics.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 4,
      image: require("../assets/image/oral_surgery.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 5,
      image: require("../assets/image/periodontics.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 6,
      image: require("../assets/images/prosthodontics.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 7,
      image: require("../assets/image/smile_designing.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 8,
      image: require("../assets/image/orthodontics.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 9,
      image: require("../assets/image/pedodontics.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
      id: 10,
      image: require("../assets/image/image1.png"),
      heading: "Endodontics",
      text: "This is a sample text",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        component="div"
        sx={{
          width: "100%",
          textAlign: "center",
          my: "20px",
          fontSize: {
            xs: '2rem',
          }
        }}
      >
        Services
      </Typography>

      <Box
        sx={{
          width: "100%",
          px: {
            xs: '2rem',
            lg: '5.4rem',
          },
          pt: "20px",
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            mb: "26px",
          }}
        >
          {data.map((d) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4}>
              <Box sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140px"
                    image={d.image}
                    alt="green iguana"
                    sx={{
                      height:{
                        // lg: "140px",
                        // md: "100px",
                      }
                    }}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ 
                      textAlign: "center", 
                      fontSize: {
                        // lg: '1.5rem',
                        md: '1.4rem',
                        sm: '1.3rem',
                        xs: '1rem',
                      }, 
                      }}
                      // variant="h5"
                      component="div"
                    >
                      {d.heading}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {d.text}
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Box>
              
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
