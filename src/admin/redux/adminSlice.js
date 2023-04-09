import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:'admin',
    initialState:{
        courseDetail:{},
        userDetail: {}
    },
    reducers:{

    }
})
export const { } = adminSlice.actions
export default adminSlice.reducer;