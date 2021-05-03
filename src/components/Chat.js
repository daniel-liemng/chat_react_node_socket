import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Box, Container, TextField } from "@material-ui/core";

let socket;

const Chat = ({ location }) => {
  const ENDPOINT = "http://localhost:5000";

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 1st: handle JOIN
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // Fix CORS problem
    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    setName(name);
    setRoom(room);

    // Send data to server
    // 3rd param: error handling
    socket.emit("join", { name, room }, () => {});

    // console.log(socket);

    // clean-up func: disconnect socket.io
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  // 2nd: Handle message
  useEffect(() => {
    // listen from backend and add message
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // Function to send message from frontend
  const sendMessage = (e) => {
    e.preventDefault();

    // Callback func is to clean message
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <Box>
      <Container>
        <TextField
          variant='standard'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </Container>
    </Box>
  );
};

export default Chat;
