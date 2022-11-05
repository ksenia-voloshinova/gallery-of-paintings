import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    locationId: 0,
    authorId:0,
    searchValue: "",
    startDate:"",
    endDate:""
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setLocationId(state, action){
            state.locationId = action.payload;
        },
        setAuthorId(state, action){
            state.authorId = action.payload;
        },
        setSearchValue(state, action){
            state.searchValue = action.payload;
        },
        setStartDate(state, action){
            state.startDate = action.payload;
        },
        setEndDate(state, action){
            state.endDate = action.payload;
        }
    },

});

export const { setLocationId, setAuthorId, setSearchValue, setStartDate, setEndDate} = filterSlice.actions;
export default filterSlice.reducer;