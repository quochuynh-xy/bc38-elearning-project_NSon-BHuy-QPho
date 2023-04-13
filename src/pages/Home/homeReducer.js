import { createSlice } from "@reduxjs/toolkit";
import { fetchDanhMucKhoaHoc } from "./services";
const initialState = {
  danhMucKhoaHoc: [],
};

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

export const actionFetchDanhMucKhoaHoc =
  (tenMuc) => async (dispatch, getState) => {
    try {
      const promise = await fetchDanhMucKhoaHoc(tenMuc);
      dispatch(actionLayDanhMucKhoaHoc(promise.data));
    } catch (error) {
      console.log(error);
    }
  };
