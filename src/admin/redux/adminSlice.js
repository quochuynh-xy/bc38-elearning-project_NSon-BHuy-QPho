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
    }
  },
});
export const { getUserDetailAction,getCourseDetailAction } = adminSlice.actions;
export default adminSlice.reducer;

// action thunk

export const getUserDetail = () => {
  return async (dispatch, getState) => {
    try {
      const res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung")
      console.log(res.data)
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
        }catch(err) {
            console.log(err)
        }
    }
};
