import React from "react";
import { useSelector } from "react-redux";
function Assignment4() {
  const { users, currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <h3>Assignment 4</h3>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
}

export default Assignment4;
