import { createSlice } from "@reduxjs/toolkit";
import {
  findTuitsThunk,
  deleteTuitThunk,
  updateTuitThunk,
  createTuitThunk,
} from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false,
};
const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },

    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
  },
  reducers: {},
});

export default tuitsSlice.reducer;
