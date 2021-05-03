import { Button, TextField } from "@material-ui/core";
import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <TextField
        variant='standard'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <Button
        variant='contained'
        color='secondary'
        onClick={(e) => sendMessage(e)}
      >
        Send
      </Button>
    </form>
  );
};

export default Input;
