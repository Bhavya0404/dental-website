import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
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
      image: require('../assets/images/image1.jpg'),
      heading: "Endodontics",
      text: "This is a sample text",
    },
    {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
        heading: "Endodontics",
        text: "This is a sample text",
      },
      {
        id: 1,
        image: require('../assets/images/image1.jpg'),
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
        variant="h3"
        component="div"
        sx={{
          width: "100%",
          textAlign: "center",
          my: '20px',
        }}
      >
        Services
      </Typography>

      <Box
        sx={{
          width: "100%",
          px: "5.4rem",
          pt: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            mb: "26px",
          }}
        >
          {data.map((d) => (
            <Grid item xs={2.4}>
              <Card sx={{ maxWidth: 300, }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={d.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {d.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {d.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
