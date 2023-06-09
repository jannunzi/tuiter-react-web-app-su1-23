import axios from "axios";

const USER_API = "http://localhost:4000/users";
const BASE_API = "http://localhost:4000/api";

const request = axios.create({
  withCredentials: true,
});

export const login = async (user) => {
  const response = await request.post(`${BASE_API}/login`, user);
  return response.data;
};

export const logout = async () => {
  const response = await request.post(`${BASE_API}/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await request.get(`${BASE_API}/profile`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${USER_API}/${id}`, user);
  return response.data;
};
