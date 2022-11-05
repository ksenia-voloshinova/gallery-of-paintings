import { createSlice } from "@reduxjs/toolkit";
import {  fetchPaintingsFiltred } from "../../utils/api";

const initialState = {
    filtredItems: [],
    status: "loading",
};

export const paintingFilterSlice = createSlice({
    name: "filteredPaintings",
    initialState,
    extraReducers:{
        [fetchPaintingsFiltred.pending]: (state) => {
            state.filtredItems =[];
            state.status = "loading";
        },
        [fetchPaintingsFiltred.fulfilled]: (state, action) => {
            state.filtredItems = action.payload;
            state.status = "success";

        },
        [fetchPaintingsFiltred.rejected]: (state) => {
            state.filtredItems =[];
            state.status = "error";
        },
    }
});

export default paintingFilterSlice.reducer;