import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  makeStyles,
  Card,
  Container,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    minWidth: "600px",
    marginTop: theme.spacing(8),
    backgroundColor: "lightBlue",
  },
  cardTitle: {
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    marginBottom: theme.spacing(3),
  },
}));

const Join = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container className={classes.wrapper}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardTitle} title="Let's chat !?!?" />
        <CardContent className={classes.cardContent}>
          <TextField
            variant='outlined'
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.textInput}
          />
          <TextField
            variant='outlined'
            label='Room'
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className={classes.textInput}
          />
          <Link to={`/chat?name=${name}&room=${room}`}>
            <Button
              variant='contained'
              color='primary'
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            >
              Sign In
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Join;
