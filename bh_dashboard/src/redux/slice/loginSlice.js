import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail } = loginSlice.actions;

export default loginSlice.reducer;
