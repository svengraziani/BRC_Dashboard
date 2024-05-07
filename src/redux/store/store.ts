import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import globalSlice from '../slice/globalSlice'
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    global: globalSlice,
    user: userSlice
  },
});
