import { createSlice } from "@reduxjs/toolkit";
const initialState = {}
const profileReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        actionSelectContent: (state, action) => {
            console.log(state);
            console.log(action);
        }
    }
});
export const {actionSelectContent} = profileReducer.actions;
export default profileReducer.reducer;