import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const PeriodonticsDetails = () => {
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
          Periodontics
        </Typography>
        <Typography variant="body1">
          Do your friends make fun of you or do not talk to you because whenever
          you open your mouth, you smell badly! <br></br>
          Have you seen blood on your brush while brushing your teeth? Or your
          gums feel like a heavy bulldozer is resting on it ? <br />
          <br />
          Well yes, you might not be having any cavity but you need to
          understand these are problems related to your gums health and it need
          to be treated. <br /> <br />
          Periodontics is the branch of dentistry concerned with the prevention,
          diagnosis, and treatment of the structures surrounding and supporting
          the teeth.
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Are Your Gums Healthy?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Knowing what healthy gums look and feel like will help you keep your
          gums in good shape, and stay on the lookout for any early signs of gum
          disease.
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What Healthy Gums Look Like?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Healthy gums are pink, firm to the touch and don’t bleed. Unhealthy
          gums are typically red, swollen, bleed easily during brushing and
          flossing, and may start pulling away from your teeth.
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What are the problems ?
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Bad breath(halitosis) or bad taste
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Red or swollen gums</ListItem>
          <ListItem sx={{ display: "list-item" }}>Bleeding gums</ListItem>
          <ListItem sx={{ display: "list-item" }}>Sensitive teeth</ListItem>
          <ListItem sx={{ display: "list-item" }}>Loose teeth</ListItem>
          <ListItem sx={{ display: "list-item" }}>Calculus deposition</ListItem>
          <ListItem sx={{ display: "list-item" }}>Painful chewing</ListItem>
        </List>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Why does this happen?
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Problems related to your gums arise due to failure in maintaining
          proper hygiene. These failures could be because of improper or no
          brushing and flossing
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Other risk factors could be:
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Smoking</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Chronic tobacco chewing
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Diabetes</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Vitamin C defeciency
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Gingivitis</ListItem>
          <ListItem sx={{ display: "list-item" }}>Periodontitis</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Pregnancy gingivitis
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Gingivitis and stains associated with certain long term medicines
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Certain medicines that cause dry mouth or gum changes.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Conditions that lower immunity, such as leukemia, HIV/AIDS and
            cancer treatment.
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What should you do ?
        </Typography>{" "}
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            You should start taking charge of your oral health.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Start brushing your teeth for two minutes at least twice a day and
            flossing at least once a day.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Get your problems resolved by visiting your dentist and get the
            required treatment done.
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Various treatment modalities can be:
        </Typography>{" "}
        <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Non surgical treatment
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Scaling &amp; root planing
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Laser treatment</ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Surgical Periodontal Procedures
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Gum Graft Surgery</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Regenerative Procedures
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Dental Crown Lengthening
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Periodontal Pocket Procedures
          </ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Dental implants
        </Typography>
      </Box>
    </Box>
  );
};

export default PeriodonticsDetails;
