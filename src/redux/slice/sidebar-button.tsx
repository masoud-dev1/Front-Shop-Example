import {createSlice} from "@reduxjs/toolkit";

const sidebarButton = createSlice({
    name: "sidebarButton",
    initialState: {
        number: 0
    },
    reducers: {
        setNumber(state , action){
            state.number = action.payload
        }
    }
});

export const {setNumber} = sidebarButton.actions;
export default sidebarButton.reducer;