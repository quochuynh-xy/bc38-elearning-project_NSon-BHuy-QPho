import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeReducer";
import detailReducer from "../pages/CourseDetails/courseDetailsReducer";
import searchReducer from "../pages/SearchingCourses/searchReducer";
import courseGroupReducer  from "../pages/CourseGroup/courseGroupReducer";

export const store = configureStore({
  reducer: {
    homeReducer,
    detailReducer,
    searchReducer,
    courseGroupReducer,
  },
});
