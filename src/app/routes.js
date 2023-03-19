// Import tất cả các trang đã làm vào đây để quản lý
import Home from "../pages/Home/Home";
export const routes = [
  {
    path: "/",
    Component: Home,
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
