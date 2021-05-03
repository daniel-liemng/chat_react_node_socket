import React from "react";

import { Paper, Toolbar } from "@material-ui/core";

import { firstUppercaseText } from "../utils";

const Room = ({ room }) => {
  return (
    <Paper>
      <Toolbar>{firstUppercaseText(room)}</Toolbar>
    </Paper>
  );
};

export default Room;
