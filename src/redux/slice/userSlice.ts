import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    email: "",
    firstName:"",
    lastName: "",
    isActive: "",
    isSuperUser: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isActive = action.payload.isActive;
      state.isSuperUser = action.payload.isSuperUser;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
