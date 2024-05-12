import { createSlice } from "@reduxjs/toolkit";

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = expirationTime.getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const authSlice = createSlice({
  name: "authRedux",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: false,
  },

  reducers: {
    increment: (state, action) => {
      const { tokenData } = action.payload;
      // state.token = action.payload.tokenData;

      state.token = tokenData;
      state.isLoggedIn = true;

      localStorage.setItem("token", tokenData);
    },

    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, logout } = authSlice.actions;

export default authSlice.reducer;
