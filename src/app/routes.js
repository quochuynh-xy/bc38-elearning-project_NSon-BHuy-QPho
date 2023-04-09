// Import tất cả các trang đã làm vào đây để quản lý
import AddCourse from "../admin/AddCourse";
import AddUser from "../admin/AddUser";
import Admin from "../admin/Admin";
import CourseDetail from "../admin/CourseDetail";
import EditCourse from "../admin/EditCourse";
import EditUser from "../admin/EditUser";
import UserDetail from "../admin/UserDetail";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import SearchingCourses from "../pages/SearchingCourses/SearchingCourses";
import CourseGroup from "../pages/CourseGroup/CourseGroup";
import AllCourses from "../pages/AllCourses/AllCourses";
import Authentication from "../pages/Authentication/Authentication";
import UserProfile from "../pages/UserProfile/UserProfile";
import RegistedCourses from "../pages/UserProfile/components/RegistedCourses/RegistedCourses";
import UserInfomation from "../pages/UserProfile/components/UserInfomation/UserInfomation";
import Notfound404 from "../components/PageNotFound/Notfound404";
export const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/chiTiet/:maKhoaHoc",
    Component: CourseDetails,
  },
  {
    path: "/timKiem/:tuKhoa",
    Component: SearchingCourses,
  },
  {
    path: "/danhMuc/:tenDanhMuc",
    Component: CourseGroup,
  },
  {
    path: "/tatCaKhoaHoc/",
    Component: AllCourses,
  },
  {
    path: "/thamGia",
    Component: Authentication,
  },
  {
    path: "/caNhan",
    Component: UserProfile,
    childs: [
      {
        path: "/caNhan",
        Component: UserInfomation,
      },
      {
        path: "khoaHocDangKy",
        Component: RegistedCourses,
      },
    ]
  },
    {
      path: "*",
      Component: Notfound404,
    },
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
