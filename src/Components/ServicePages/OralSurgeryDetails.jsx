import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const OralSurgeryDetails = () => {
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
          Oral Surgery
        </Typography>
        <Typography variant="body1">
          Do you always feel something is hitting you from back of your mouth
          but always find out healthy teeth ? Or you have a decayed tooth who
          has taken its last breath and now needs to be pulled out.( Or you met
          with an accident where your oral structures got fractured ?)
        </Typography>
        <br />
        <Typography variant="body1">
          Well you need to visit a skilled dentist and keep correct diagnosis at
          top tier
        </Typography>
        <br />
        <Typography variant="body1">
          You dentist might shoot some x rays for this and your tooth might need
          an extraction. Or you may be asked for a cbct and you might need an
          oral surgery.
        </Typography>
        <br />
        <Typography variant="body1">
          Oral surgery is the specialty of dentistry which includes the
          diagnosis, surgical and adjunctive treatment of diseases, injuries and
          defects involving both the functional and aesthetic aspects of the
          hard and soft tissues of the oral and maxillofacial region
        </Typography>
        <br />
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What problems are you experiencing?
        </Typography>{" "}
        <br />
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Radiating pain of tooth
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Pain in tooth</ListItem>
          <ListItem sx={{ display: "list-item" }}>Sensitivity to hot</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Numbness of involved side
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Severely decayed tooth
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Fractured tooth</ListItem>
          <ListItem sx={{ display: "list-item" }}>Insomnia</ListItem>
          <ListItem sx={{ display: "list-item" }}>Bone loss</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Clicking sound of temperomandibular joint
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Fracture of jaw or oral structures
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Fracture of jaw or oral structures
          </ListItem>
        </List>
        <br />
        <Typography variant="body1">
          Don&#39;t worry, every problem has a solution. Even though some
          problems like numbness , clicking sound etc has been neglected a lot
          of times. You might have been told that it it&#39;s just an illusion
          of your mind but we have solution for every problem you have been
          experiencing since so long.
        </Typography>
        <br />
        <Typography variant="body1">
          The kind of treatment you need, depends on the the kind of problem you
          are experiencing
        </Typography>
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Pain due to impacted tooth ?
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Numbness of affected side due to impacted tooth?
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Radiating pain due to impacted tooth ?
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Insomnia?
        </Typography>{" "}
        <br />
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You need a disimpaction of tooth
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          It could be either non surgical or surgical , depending upon the
          position of the tooth
        </Typography>
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Severely decayed tooth?
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Fractured tooth?
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You need an extraction of tooth.
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          It could be either non surgical or surgical , depending upon the
          condition of the tooth
        </Typography>
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Suffering from excessive bone loss and periodontitis?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Gum recession can occur as a result of periodontitis. In these
          instances, you may need a gum graft. The surgeon reinforces the area
          of tissue loss with donor tissue. This tissue may be taken from the
          roof of your mouth or purchased at a certified tissue bank.
        </Typography>
        <br /> <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          A tooth has been missing for some time ?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Bone deterioration can occur in that area because there are no roots
          to stimulate the nerves. A dental bone graft restores volume and
          density in your jawbone so that dental implants can be placed later
          on.
        </Typography>
        <br /> <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Skeletal abnormalities of your jaw bones ?
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You need a corrective jaw surgery / orthognathic surgery
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          This procedure may be recommended to improve chewing function, correct
          misalignment or address facial imbalances. Corrective jaw surgery is
          also used to ease pain caused by TMJ dysfunction (TMD).
        </Typography>
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Met with an accident and got fractured jaw ?
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You need fixation, immobilisation and splinting of bones
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Cleft lip and palate ?
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          You need a cleft lip and palate repair surgery.
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          In the repair the muscles of the soft palate are divided from their
          abnormal insertion into the back of the hard palate and sewn together
          to form a sling across the soft palate. The cleft is repaired by
          sewing together the two layers of the palate that separate the mouth
          from the nose.
        </Typography>
        <br />

      </Box>
    </Box>
  );
};

export default OralSurgeryDetails;
