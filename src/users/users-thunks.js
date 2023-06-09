import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./users-service";

export const getUsersThunk = createAsyncThunk("users/getUsers", async () => {
  const users = await userService.getUsers();
  return users;
});

export const loginThunk = createAsyncThunk("users/login", async (user) => {
  const currentUser = await userService.login(user);
  return currentUser;
});

export const profileThunk = createAsyncThunk("users/profile", async () => {
  const currentUser = await userService.getProfile();
  return currentUser;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
  await userService.logout();
});
