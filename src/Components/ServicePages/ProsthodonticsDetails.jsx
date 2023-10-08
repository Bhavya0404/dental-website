import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ProsthodonticsDetails = () => {
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
          Prosthodontics
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Did you lost your tooth in an accident?
        </Typography>{" "}
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Or you have a grandparent who feels underconfident because they have
          lost their teeth too early ?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Well don&#39;t worry, we have a specialised branch where we have
          solution for replacing your missing tooth
        </Typography>
        <br />
        <Typography variant="body1">
          Prosthetic dentistry is a branch of dentistry dedicated to making
          replacements for missing or damaged teeth.
        </Typography>
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          So what are the options you can go for missing tooth replacement?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Foremost, you need to decide what kind of replacement prosthesis do
          you want which will depend on the nature and cost of prosthesis and
          the age of the patient receiving the treatment.
        </Typography>
        <br />
        <Typography variant="body1">
          Foremost, you need to decide what kind of replacement prosthesis do
          you want which will depend on the nature and cost of prosthesis and
          the age of the patient receiving the treatment.
        </Typography>
        <br />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Options for patient who wants the whole set of replacement of their
          missing teeth
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Complete dentures</ListItem>
          <ListItem sx={{ display: "list-item" }}>Overdentures</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Implant supported dentures
          </ListItem>
        </List>
        <br />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Options for patients who lost their tooth due to trauma or an accident
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Dental bridge</ListItem>
          <ListItem sx={{ display: "list-item" }}>Dental Implant</ListItem>
        </List>
        <br />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          If you have got an RCT done then you need to protect your tooth
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Dental crown</ListItem>
        </List>
        <br />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Options for patients who don&#39;t want to get their tooth extracted
          and want to save it after a root canal treatment
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Post &amp; Core</ListItem>
        </List>
        <br />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Options for patients with temperomandibular joint disease
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Occlusal appliance</ListItem>
        </List>
        <br />
      </Box>
    </Box>
  );
};

export default ProsthodonticsDetails;
