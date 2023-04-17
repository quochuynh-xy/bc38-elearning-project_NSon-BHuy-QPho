import { createSlice } from "@reduxjs/toolkit";
import { fetchKhoaHocTheoDanhMuc } from "./services";
const initialState = {
  danhSachKhoaHoc: [],
  loadStatus: null, // "PENDING - DONE"
};
const courseGroupReducer = createSlice({
  name: "danhMucKhoaHoc",
  initialState,
  reducers: {
    actionLayKhoaHocTheoDanhMucSuccess: (state, action) => {
      state.danhSachKhoaHoc = action.payload;
      state.loadStatus = "DONE";
    },
    actionLayKhoaHocTheoDanhMucFailled: (state, action) => {
      state.danhSachKhoaHoc = [];
      state.loadStatus = "DONE";
    },
    actionWaiting: (state) => {
      state.loadStatus = "PENDING";
    },
  },
});
export const {
  actionLayKhoaHocTheoDanhMucSuccess,
  actionLayKhoaHocTheoDanhMucFailled,
  actionWaiting,
} = courseGroupReducer.actions;
export default courseGroupReducer.reducer;
//
export const actionFetchKhoaHocTheoDanhMuc = (maDanhMuc) => {
  return async (dispatch, getState) => {
    dispatch(actionWaiting())
    try {
      const res = await fetchKhoaHocTheoDanhMuc(maDanhMuc);
      dispatch(actionLayKhoaHocTheoDanhMucSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(actionLayKhoaHocTheoDanhMucFailled())
    }
  };
};
