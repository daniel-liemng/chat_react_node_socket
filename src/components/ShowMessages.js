import React from "react";
import { Container } from "@material-ui/core";

import Message from "./Message";

const ShowMessages = ({ messages, name }) => {
  return (
    <Container>
      {messages.map((message, index) => (
        <div key={index}>
          <Message {...{ message, name }} />
        </div>
      ))}
    </Container>
  );
};

export default ShowMessages;
