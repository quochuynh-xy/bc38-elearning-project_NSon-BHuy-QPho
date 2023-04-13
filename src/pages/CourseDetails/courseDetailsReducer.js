import { createSlice } from "@reduxjs/toolkit";
import { fetchThongTinKhoaHoc } from "./services";
const initialState = {
  thongTinKhoaHoc: {
    nguoiTao: {},
    danhMucKhoaHoc: {},
  },
  getDataSuccess: null,
};
export const detailReducer = createSlice({
  name: "courseDetail",
  initialState,
  reducers: {
    actionLayThongTinKhoaHoc: (state, action) => {
      state.thongTinKhoaHoc = action.payload;
      state.getDataSuccess = true;
    },
    actionLayThongTinKhoaHocFail: (state, action) => {
      state.getDataSuccess = action.payload;
    }
  },
});
export const { actionLayThongTinKhoaHoc,actionLayThongTinKhoaHocFail } = detailReducer.actions;
export default detailReducer.reducer;
export const actionFetchThongTinKhoaHoc = (maKhoaHoc) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetchThongTinKhoaHoc(maKhoaHoc);
      dispatch(actionLayThongTinKhoaHoc(res.data));
    } catch (error) {
      dispatch(actionLayThongTinKhoaHocFail("FAIL"))
    }
  };
};
