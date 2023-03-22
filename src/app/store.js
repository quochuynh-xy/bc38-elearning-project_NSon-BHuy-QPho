import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeReducer";
import detailReducer from "../pages/CourseDetails/courseDetailsReducer"
export const store = configureStore({
  reducer: {
    homeReducer,
    detailReducer,
  },
});
