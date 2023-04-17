import { createSlice } from "@reduxjs/toolkit";
import { fetchKetQuaTimKiem } from "./services";
const initialState = {
  ketQuaTimKiem: [],
  searchStatus: null // PENDING - DONE
};
const searchReducer = createSlice({
  name: "searchPage",
  initialState: initialState,
  reducers: {
    actionLayDanhSachKhoaHocSuccess: (state, action) => {
      state.ketQuaTimKiem = action.payload;
      state.searchStatus = "DONE"
    },
    actionLayDanhSachKhoaHocFailled: (state, action) => {
      state.ketQuaTimKiem = [];
      state.searchStatus = "DONE"
    },
    actionChoKetQua: (state, action) => {
        state.searchStatus = "PENDING"
    },
  },
});
export const {
  actionLayDanhSachKhoaHocSuccess,
  actionLayDanhSachKhoaHocFailled,
  actionChoKetQua
} = searchReducer.actions;
export default searchReducer.reducer;

export const actionFetchDanhSachKhoaHoc = (tuKhoa) => async (dispatch, getState) => {
    dispatch(actionChoKetQua())
    try {
        const res = await fetchKetQuaTimKiem(tuKhoa);
        dispatch(actionLayDanhSachKhoaHocSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(actionLayDanhSachKhoaHocFailled())
    }
}
