import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export default store;
