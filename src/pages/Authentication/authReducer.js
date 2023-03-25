import { createSlice } from "@reduxjs/toolkit";
import { dangKy } from "./services";
const initialState = {
    registerStatus: null
}
const authenReducer = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        actionDangKyThanhCong: (state, action) => {
            state.registerStatus = "Đăng ký thành công";
            console.log(action);
        },
        actionDangKyThatBai: (state, action) => {
            state.registerStatus = "Đăng ký thất bại";
            console.log(action);
        }
    }
})
export default authenReducer.reducer;
export const {actionDangKyThanhCong, actionDangKyThatBai} = authenReducer.actions;
//
export const actionGuiThongTinDangKy = (thongTinDangKy) => async (dispatch) => {
    try {
        const res = await dangKy(thongTinDangKy);
        dispatch(actionDangKyThanhCong(res.data));
    } catch (error) {
        console.log(error);
        dispatch(actionDangKyThatBai(error))
    }
}