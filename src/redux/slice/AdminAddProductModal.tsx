import {createSlice} from "@reduxjs/toolkit";

const AdminAddProductModal = createSlice({
    name : "AdminAddProductModal",
    initialState:{
        productModal: false,
    },
    reducers : {
        toggleAddProductModal (state, action) {
            state.productModal = action.payload;
        }
    }
});

export const {toggleAddProductModal} = AdminAddProductModal.actions;
export default AdminAddProductModal.reducer;