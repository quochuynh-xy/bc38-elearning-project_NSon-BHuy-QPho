// Import tất cả các trang đã làm vào đây để quản lý
import AddCourse from "../admin/Course/AddCourse";
import AddUser from "../admin/User/AddUser";
import Admin from "../admin/Admin";
import CourseDetail from "../admin/Course/CourseDetail";
import EditCourse from "../admin/Course/EditCourse";
import EditUser from "../admin/User/EditUser";
import UserDetail from "../admin/User/UserDetail";
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
import UserRegister from "../admin/Register/UserRegister";
import CourseRegister from "../admin/Register/CourseRegister";
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
    ],
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
      },
      { path: "user-detail/edit-user/:taiKhoan", component: EditUser },
      {
        path: "course-detail",
        component: CourseDetail,
      },
      { path: "course-detail/edit-course/:maKhoaHoc", component: EditCourse },
      { path: "add-user", component: AddUser },
      { path: "add-course", component: AddCourse },
      {path:'user-detail/register-user/:taiKhoan', component: UserRegister},
      {path:'course-detail/register-course/:maKhoaHoc', component: CourseRegister},
    ],
  },
];
