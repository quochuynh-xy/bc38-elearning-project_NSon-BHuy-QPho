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
  },
});
export const { getUserDetailAction } = adminSlice.actions;
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

export const getCourseDetail = () => {};
