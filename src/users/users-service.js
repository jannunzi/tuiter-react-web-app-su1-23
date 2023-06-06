import axios from "axios";

const USER_API = "http://localhost:4000/users";

export const getUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
};
