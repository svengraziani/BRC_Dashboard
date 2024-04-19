import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarVisible: true
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSidebarVisibility: (state, action) => {
        state.isSidebarVisible = action.payload.sidebarVisibility
    }
  },
});

export const { setSidebarVisibility } = globalSlice.actions;

export default globalSlice.reducer;
