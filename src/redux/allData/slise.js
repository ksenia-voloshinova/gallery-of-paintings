import { createSlice } from "@reduxjs/toolkit";
import {  fetchData} from "../../utils/api";

const initialState = {
    allPaintings: [],
    authors: [],
    locations: [],
    status: "loading",
};

export const allDataSlice = createSlice({
    name: "allData",
    initialState,
    extraReducers:{
        [fetchData.pending]: (state) => {
            state.allPaintings =[];
            state.authors =[];
            state.locations =[];
            state.status = "loading";
        },
        [fetchData.fulfilled]: (state, action) => {
            state.allPaintings = action.payload[0];
            state.authors = action.payload[1];
            state.locations = action.payload[2];
            state.status = "success";

        },
        [fetchData.rejected]: (state) => {
            state.allPaintings =[];
            state.authors =[];
            state.locations =[];
            state.status = "error";
        },
    }
});

export default allDataSlice.reducer;