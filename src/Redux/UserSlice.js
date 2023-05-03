import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addData(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addData } = UserSlice.actions;
export default UserSlice.reducer;
