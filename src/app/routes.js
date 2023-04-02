// Import tất cả các trang đã làm vào đây để quản lý
import AddCourse from "../admin/AddCourse";
import AddUser from "../admin/AddUser";
import Admin from "../admin/Admin";
import CourseDetail from "../admin/CourseDetail";
import EditCourse from "../admin/EditCourse";
import EditUser from "../admin/EditUser";
import UserDetail from "../admin/UserDetail";
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

export const adminRoutes = [
  {
    path: "admin",
    component: Admin,
    children: [
      {
        path: "user-detail",
        component: UserDetail,
        children1: [{ path: "edit-user", component: EditUser }],
      },
      {
        path: "course-detail",
        component: CourseDetail,
        children1: [{ path: "edit-course", component: EditCourse }],
      },
      
      { path: "add-user", component: AddUser },
      { path: "add-course", component: AddCourse },
    ],
  },
];
