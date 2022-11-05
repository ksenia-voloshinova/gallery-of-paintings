import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNumber: 1,
    paintingsPerPage: 12
};

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers:{
        setPageNumber(state, action){
            state.pageNumber = action.payload;
        }
    }
});

export const { setPageNumber } = paginationSlice.actions;
export default paginationSlice.reducer;