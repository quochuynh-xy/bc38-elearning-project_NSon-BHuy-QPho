// Import tất cả các trang đã làm vào đây để quản lý
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
export const routes = [
  {
    path: "/",
    Component: Home,
    isPublic: false,
    isAuth: false,
  },
  {
    path: "/chiTiet/:maKhoaHoc",
    Component: CourseDetails,
    isPublic: false,
    isAuth: false,
  },
//   {
//     path: "*",
//     Component: PageNotFound,
//     isPublic: false,
//     isAuth: false,
//   },
];
