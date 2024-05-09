import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    email: "",
    firstName:"",
    lastName: "",
    isActive: "",
    isSuperUser: "",
    pk:""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log("sateeeee",action)
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isActive = action.payload.isActive;
      state.isSuperUser = action.payload.isSuperUser;
      state.pk=action.payload.pk
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
