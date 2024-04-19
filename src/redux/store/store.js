import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import globalSlice from '../slice/globalSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    global: globalSlice
  },
});
