import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeReducer";
import adminReducer from '../admin/redux/adminReducer'
export const store = configureStore({
  reducer: {
    homeReducer,
    admin: adminReducer
  },
});
