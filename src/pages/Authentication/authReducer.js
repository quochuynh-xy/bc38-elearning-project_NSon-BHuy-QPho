import { createSlice } from "@reduxjs/toolkit";
import { dangKy } from "./services";
import { dangNhap } from "./services";
const initialState = {
  pageMessage: "", // Thông báo hiển thị khi đăng ký - Đăng nhập
  loadingStatus: null, // null - PENDING - SUCCESS - ERROR - Trạng thái promise
  registerData: {},
  userInfo: {
    userBasicInfo: {}, // Thông tin tài khoản, mật khẩu, tên người dùng....
    chiTietKhoaHocGhiDanh: [], // Danh sách các khóa học đã ghi danh.
  },
  isUserLogin: false,
};
const authenReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    actionDangKyThanhCong: (state, action) => {
      state.loadingStatus = "SUCCESS";
      state.pageMessage = "Đăng ký thành công";
      state.registerData = action.payload;
    },
    actionDangKyThatBai: (state, action) => {
      state.loadingStatus = "ERROR";
      state.pageMessage = action.payload;
    },
    actionWaitingLoadData: (state, action) => {
      state.loadingStatus = "PENDING";
      // state.registerData = {};
    },
    actionResetLoadingStatus: (state) => {
      state.loadingStatus = null;
    },
    actionDangNhapThanhCong: (state, action) => {
      state.loadingStatus = "SUCCESS";
      state.pageMessage = `Chào mừng ${action.payload.hoTen}!`;
      state.userInfo.userBasicInfo = action.payload;
      state.isUserLogin = true;
      localStorage.setItem("elearningToken", action.payload.accessToken);
    },
    actionDangNhapThatBai: (state, action) => {
      state.loadingStatus = "ERROR";
      state.pageMessage = action.payload;
      state.userInfo.userBasicInfo = {};
      state.isUserLogin = false;
    },
    actionGetUserInfo: (state, action) => {
      const {
        chiTietKhoaHocGhiDanh,
        email,
        hoTen,
        maLoaiNguoiDung,
        maNhom,
        matKhau,
        soDT,
        taiKhoan,
      } = { ...action.payload };
      state.userInfo.userBasicInfo = {
        email,
        hoTen,
        maLoaiNguoiDung,
        maNhom,
        matKhau,
        soDT,
        taiKhoan,
      };
      state.userInfo.chiTietKhoaHocGhiDanh = chiTietKhoaHocGhiDanh;
      state.isUserLogin = true;
    },
    actionLogOut: (state, action) => {
      localStorage.setItem("elearningToken", "");
      state.userInfo = initialState.userInfo;
      state.isUserLogin = false;
    },
  },
});
export default authenReducer.reducer;
export const {
  actionDangKyThanhCong,
  actionDangKyThatBai,
  actionWaitingLoadData,
  actionResetLoadingStatus,
  actionDangNhapThanhCong,
  actionDangNhapThatBai,
  actionGetUserInfo,
  actionLogOut
} = authenReducer.actions;
//
export const actionGuiThongTinDangKy = (thongTinDangKy) => async (dispatch) => {
  dispatch(actionWaitingLoadData());
  try {
    const res = await dangKy(thongTinDangKy);
    dispatch(actionDangKyThanhCong(res.data));
  } catch (error) {
    console.log(error);
    dispatch(actionDangKyThatBai(error.response.data));
  }
};
export const actionGuiThongTinDangNhap =
  (thongTinDangNhap) => async (dispatch) => {
    try {
      const res = await dangNhap(thongTinDangNhap);
      dispatch(actionDangNhapThanhCong(res.data));
    } catch (error) {
      console.log(error);
      dispatch(actionDangNhapThatBai(error.response.data));
    }
  };
