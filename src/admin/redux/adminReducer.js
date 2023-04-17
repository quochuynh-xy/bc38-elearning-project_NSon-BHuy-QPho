import { createSlice } from "@reduxjs/toolkit";
import { https, httpsNoParams } from "../../services/config";
import Swal from "sweetalert2";

const initialState = {
  userList: {},
  userListData: {},
  courseList: {},
  courseListData: {},
  adminInfo: null,
  categoryCourse: null,
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    fetchUserDetailAction: (state, action) => {
      state.userList = action.payload;
    },
    fetchUserData: (state, action) => {
      state.userListData = action.payload;
    },
    deleteUserAction: (state, action) => {
      state.userListData = action.payload;
    },
    addUserAction: (state, action) => {
      state.userListData = [...state.userListData, { ...action.payload }];
    },
    updateUserAction: (state, action) => {
      state.userListData = [...state.userListData, { ...action.payload }];
    },
    fetchCourseDetailAction: (state, action) => {
      state.courseList = action.payload;
    },
    fetchCourseData: (state, action) => {
      state.courseListData = action.payload;
    },
    fetchCourseCategory: (state, action) => {
      state.categoryCourse = action.payload;
    },
    getAccountAdmin: (state, action) => {
      state.adminInfo = action.payload;
    },
    deleteCourseAction: (state, action) => {
      state.courseListData = action.payload;
    },
    addCourseAction: (state, action) => {
      state.courseListData = [...state.courseListData, { ...action.payload }];
    },
    updateCourseAction: (state, action) => {
      state.courseListData = [...state.courseListData, { ...action.payload }];
    },
  },
});
export const {
  addCourseAction,
  deleteCourseAction,
  getAccountAdmin,
  fetchCourseCategory,
  fetchUserData,
  fetchCourseData,
  fetchCourseDetailAction,
  fetchUserDetailAction,
  deleteUserAction,
  addUserAction,
  updateUserAction,
} = adminSlice.actions;
export default adminSlice.reducer;

// action thunk

export const fetchUserApi =
  (page = 1, tuKhoa = null) =>
  async (dispatch) => {
    try {
      const res = await https.get(
        "api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang",
        {
          params: {
            tuKhoa,
            page,
          },
        }
      );
      dispatch(fetchUserDetailAction(res.data));
      dispatch(fetchUserData(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUserApi = (taiKhoan) => {
  return async (dispatch, getState) => {
    try {
      const result = await Swal.fire({
        title: "Bạn có muốn xóa người dùng này không?",
        text: "Bạn không thể khôi phục sau khi xóa!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có, tôi muốn xóa người dùng này!",
      });

      if (result.isConfirmed) {
        const res = await https.delete("api/QuanLyNguoiDung/XoaNguoiDung", {
          params: {
            taiKhoan,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        });
        Swal.fire("Xóa thành công!", "success");
        const { admin } = getState();
        const updatedUserDetail = admin.userListData?.filter(
          (user) => user.taiKhoan !== taiKhoan
        );
        dispatch(deleteUserAction(updatedUserDetail));
        console.log(res);
      }
    } catch (err) {
      console.log(err);
      alert("Người dùng đã được ghi danh không thể xóa!");
    }
  };
};
export const addUserApi = (values) => {
  return async (dispatch, getState) => {
    try {
      const res = await https.post(
        "api/QuanLyNguoiDung/ThemNguoiDung",
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        }
      );
      dispatch(addUserAction(values));
      console.log(res);
      alert("Thêm thành công");
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUserApi = (values) => {
  return async (dispatch) => {
    try {
      const res = await https.put(
        "api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        }
      );
      console.log(res);
      dispatch(updateUserAction(values));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCourseListApi =
  (tenKhoaHoc = null, page = 1) =>
  async (dispatch) => {
    try {
      const res = await https.get(
        "api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang",
        {
          params: {
            tenKhoaHoc,
            page,
          },
        }
      );
      console.log(res.data);
      dispatch(fetchCourseDetailAction(res.data));
      dispatch(fetchCourseData(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };
export const fetchCategoryCourse = () => {
  return async (dispatch) => {
    try {
      const res = await https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      dispatch(fetchCourseCategory(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const accountAdmin = () => {
  return async (dispatch) => {
    try {
      const res = await https.post(
        "api/QuanLyNguoiDung/ThongTinTaiKhoan",
        null,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        }
      );
      console.log(res.data);
      dispatch(getAccountAdmin(res.data?.taiKhoan));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCourseApi = (maKhoaHoc) => {
  return async (dispatch, getState) => {
    try {
      const result = await Swal.fire({
        title: "Bạn có muốn xóa khóa học này không?",
        text: "Bạn không thể khôi phục sau khi xóa!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có, tôi muốn xóa khóa học này!",
      });

      if (result.isConfirmed) {
        const res = await https.delete("api/QuanLyKhoaHoc/XoaKhoaHoc", {
          params: {
            maKhoaHoc,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        });
        Swal.fire("Xóa thành công!", "success");
        const { admin } = getState();
        const updatedCourse = admin.courseListData?.filter(
          (course) => course.maKhoaHoc !== maKhoaHoc
        );
        dispatch(deleteCourseAction(updatedCourse));
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCourseApi = (formData) => {
  return async (dispatch, getState) => {
    try {
      const res = await https.post(
        "api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        }
      );
      dispatch(addCourseAction(formData));
      alert("Thêm thành công");
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateCourseApi = (formData) => {
  return async (dispatch) => {
    try {
      const res = await https.post(
        "api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("elearningToken"),
          },
        }
      );
      dispatch();
    } catch (err) {
      console.log(err);
    }
  };
};
