import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./menuSlider";
import authConfig from "./authRedux";

export const store = configureStore({
  reducer: {
    menuSlider: counterReducer,
    authRedux: authConfig,
  },
});
