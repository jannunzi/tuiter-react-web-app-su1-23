import React, { useEffect, useState } from "react";
import { getUsers, createUser } from "./users-service";

function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "LastName",
  });
  const handleCreateUser = async () => {
    const user = await createUser({ ...newUser, username: "username" });
    setUsers([...users, user]);
    setNewUser({ firstName: "" });
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={handleCreateUser}
            className="btn btn-success float-end"
          >
            Create
          </button>
          <input
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
            className="form-control w-75"
          />
        </li>
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Users;
