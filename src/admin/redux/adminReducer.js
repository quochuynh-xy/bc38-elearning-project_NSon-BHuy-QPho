import { createSlice } from "@reduxjs/toolkit";
import { https } from "../../services/config";
const initialState = {
  courseDetail: {},
  userDetail: {},
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getUserDetailAction: (state, action) => {
       state.userDetail = action.payload;
    },
    getCourseDetailAction: (state, action) => {
        state.courseDetail = action.payload
    },
    addCourseAction: (state, action) => {
      state.courseDetail = action.payload
    }
  },
});
export const { getUserDetailAction,getCourseDetailAction,addCourseAction } = adminSlice.actions;
export default adminSlice.reducer;

// action thunk

export const getUserDetail = () => {
  return async (dispatch, getState) => {
    try {
      const res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung")
      dispatch(getUserDetailAction(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCourseDetail = () => {
    return async (dispatch, getState) => {
        try{
            const res = await https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc")
            dispatch(getCourseDetailAction(res.data))
            console.log(res.data)
        }catch(err) {
            console.log(err)
        }
    }
};

export const addCourse = (formData) => {
  return async (dispatch, getState)=> {
    try {
      const res = await https.post('api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh',formData)
      alert('Thêm thành công')
      dispatch(addCourseAction(formData))
      console.log(res.data)
    }catch(err){
       console.log(err)
    }
  }
}

export const addUser = (data) => {
  return async (dispatch,getState) => {
    try{
      const res = await https.post('api/QuanLyNguoiDung/ThemNguoiDung', data)
    }catch(err){
      console.log(err)
    }
  }
}