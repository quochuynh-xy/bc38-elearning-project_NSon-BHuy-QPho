import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeReducer";
export const store = configureStore({
  reducer: {
    homeReducer,
  },
});
