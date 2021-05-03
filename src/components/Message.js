import React from "react";

import ReactEmoji from "react-emoji";
import { firstUppercaseText } from "../utils";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p>{firstUppercaseText(trimmedName)}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p style={{ color: "red" }}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p style={{ color: "red" }}>{firstUppercaseText(user)}</p>
    </div>
  );
};

export default Message;
