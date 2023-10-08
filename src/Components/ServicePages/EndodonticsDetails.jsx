import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const EndodonticsDetails = () => {
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
          Endodontics
        </Typography>
        <Typography variant="body1">
          Have you been suffering from pain and sensitivity in your teeth from a
          long time, or you find any pus formation near your gum at frequent
          intervals, or you have got some kind of sports injury or met with some
          accident?
        </Typography>
        <br />
        <Typography variant="body1">
          Well that means you haven&#39;t been following a good care of your
          teeth and there might be a cavity which has now progressed deep inside
          the pulp of your tooth. In simple words it means that the tooth is now
          infected and it can&#39;t be managed just by tooth fillings and the
          treatment of pulp is needed.
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Endodontics is the branch of dentistry concerned with diseases &amp;
          injuries and treatment of the soft tissues inside a tooth (the dental
          pulp).
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What kind of problems you can face?
        </Typography>{" "}
        <br />
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Pain in tooth</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Radiating pain from tooth to forehead, eye, ear.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Sensitivity to hot</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sensitivity to sweet
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Pain on chewing</ListItem>
          <ListItem sx={{ display: "list-item" }}>Accidental trauma</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Pain in RCT treated tooth
          </ListItem>
        </List>
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What kind of treatment is required?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Since your tooth has bygone from the stage of restorations, now you
          need treatment of the pulp.
        </Typography>{" "}
        <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          RCT
        </Typography>
        <Typography variant="body1">
          It is a dental procedure used to treat infection in the nerves of the
          tooth. (If your tooth has surpassed this stage too then you need pulp
          treatment)
        </Typography>{" "}
        <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Endodontic retreatment
        </Typography>
        <Typography variant="body1">
          If you suspect a tooth that had a prior root canal requires
          retreatment, visit your dentist. As with any dental or medical
          procedure, it’s possible your tooth won’t heal as expected after
          initial treatment for a variety of reasons.
        </Typography>{" "}
        <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Apicoectomy, or root-end resection
        </Typography>
        <Typography variant="body1">
          It’s possible that a nonsurgical root canal procedure won’t be enough
          to save your tooth and that your endodontist will recommend surgery.
        </Typography>{" "}
        <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Traumatic Dental Injuries
        </Typography>
        <Typography variant="body1">
          Traumatic dental injuries often occur as a result of an accident or
          sports injury.With advanced skills, techniques and technologies
          injured teeth cab be saved.
        </Typography>{" "}
        <br />
      </Box>
    </Box>
  );
};

export default EndodonticsDetails;
