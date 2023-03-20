import { https } from "../../services/config";
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    danhMucKhoaHoc: [],
}
// reducer và action được dồn lại 1 chỗ (theo sự hướng dẫn của Sếp Khải)
export const homeReducer = createSlice({
    name: "home",
    initialState,
    reducers: {
        layDanhMucKhoaHocAction: (state, action)=> {
            state.danhMucKhoaHoc = action.payload
        },
        
    }
})
export const {layDanhMucKhoaHocAction} = homeReducer.actions;
export default homeReducer.reducer;

export const fetchDanhMucKhoaHoc = (tenMuc) => async (dispatch, getState) => {
    try {
        const promise = await https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
            params: {
                tenDanhMuc: tenMuc
            }
        });
        console.log(promise.data);
        dispatch(layDanhMucKhoaHocAction(promise.data))
    } catch (error) {
        console.log(error);
    }
}