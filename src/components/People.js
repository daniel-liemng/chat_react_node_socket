import React from "react";

import { firstUppercaseText } from "../utils";

const People = ({ users }) => {
  console.log("444", users);

  // const joinedUsers = users.map((user) => user.name);

  // console.log("JOIN", joinedUsers);

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{firstUppercaseText(user.name)}</li>
      ))}
    </ul>
  );
};

export default People;
