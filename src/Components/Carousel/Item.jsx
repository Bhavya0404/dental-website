import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";

function Item(props) {
  return (
    <div>
      {props.item.imgPath ? (
        <img height="540px" width="100%" src={props.item.imgPath} alt={"HI"} />
      ) : (
        <Typography>{props.item.text}</Typography>
      )}
    </div>
  );
}

export default Item;
