import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeReducer";
import detailReducer from "../pages/CourseDetails/courseDetailsReducer";
import searchReducer from "../pages/SearchingCourses/searchReducer";
import courseGroupReducer  from "../pages/CourseGroup/courseGroupReducer";
import authReducer from "../pages/Authentication/authReducer";
import adminReducer from "../admin/redux/adminReducer"
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    homeReducer,
    detailReducer,
    searchReducer,
    courseGroupReducer,
    authReducer,
  },
});
