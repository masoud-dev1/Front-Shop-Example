import {createSlice} from "@reduxjs/toolkit";

const adminNavbarAnimation = createSlice({
    name: "adminNavbarAnimation",
    initialState: {isOpen : false},
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const {toggle} = adminNavbarAnimation.actions;
export default adminNavbarAnimation.reducer;