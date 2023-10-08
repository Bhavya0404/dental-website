import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const PedodonticsDetail = () => {
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
          Pedodontics
        </Typography>
        <Typography variant="body1">
          Chocolates, chips, toffees, pizzas and other junk &amp; sticky food
          never fails to temptate children.{" "}
        </Typography>
        <br />
        <Typography variant="body1">
          For infants, the habit of sleeping while feeding milk.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Parents also reward their kids with packed food items.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Since brushing is either highly neglected or there is lack of
          knowledge about proper brushing technique among kids, dental caries
          knock down children&#39;s teeth quickly,{" "}
        </Typography>
        <br />
        <Typography variant="body1">
          The care and treatment required for kids oral health care is known as
          paediatric dentistry.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Children begin to get their milk teeth during the first 6 months of
          life. By age 6 or 7 years, they start to lose their first set of
          teeth, which eventually are replaced by secondary, permanent teeth.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          When does the care actually begins?
        </Typography> <br />
        <Typography variant="body1">
          The care for infants teeth starts just before the first tooth appears
          in the oral cavity that is at the age of 6 months.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Clean your baby&#39;s mouth after each feeding or at least twice a
          day.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Use a clean gauze pad or soft cloth over your finger. Dip the gauze in
          water so it is damp, but not soaking wet. Wipe your child&#39;s teeth
          and gums gently.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          As the teeth starts to erupt start using ki kids toothbrush and
          fluoridated toothpaste. For children younger than 3, use about the
          size of a grain of rice. For children age 3 and older, use a pea-size
          toothpaste.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Visit us, and following treatment line may be followed:
        </Typography> <br />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Prevention
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Oral prophylaxis</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Pit and fissure sealants
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>SDF</ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Restoration
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Tooth fillings</ListItem>
          <ListItem sx={{ display: "list-item" }}>IPC/DPC</ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Deep restorations
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Pulpectomy</ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Extraction
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Space maintainers
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Habit breaking appliances
        </Typography>
      </Box>
    </Box>
  );
};

export default PedodonticsDetail;
