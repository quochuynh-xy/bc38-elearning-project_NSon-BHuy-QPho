import { createSlice } from "@reduxjs/toolkit";
import { fetchDanhMucKhoaHoc } from "./services";
const initialState = {
  danhMucKhoaHoc: [],
};
// reducer và action được dồn lại 1 chỗ (theo sự hướng dẫn của Sếp Khải)
export const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    actionLayDanhMucKhoaHoc: (state, action) => {
      state.danhMucKhoaHoc = action.payload;
    },
  },
});
export const { actionLayDanhMucKhoaHoc } = homeReducer.actions;
export default homeReducer.reducer;
// Async actions nếu có
export const actionFetchDanhMucKhoaHoc =
  (tenMuc) => async (dispatch, getState) => {
    try {
      const promise = await fetchDanhMucKhoaHoc(tenMuc);
      dispatch(actionLayDanhMucKhoaHoc(promise.data));
    } catch (error) {
      console.log(error);
    }
  };
