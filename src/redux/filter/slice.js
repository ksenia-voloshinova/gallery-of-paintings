import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    locationId: 0,
    authorId:0,
    searchValue: "",
    startDate:"",
    endDate:"",
    menuIsOpenLocation: false,
    menuIsOpenAuthor: false,
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
        },
        setMenuIsOpenLocation(state, action){
            state.menuIsOpenLocation = action.payload;
        },
        setMenuIsOpenAuthor(state, action){
            state.menuIsOpenAuthor = action.payload;
        }
    },

});

export const { setLocationId, setAuthorId, setSearchValue, setStartDate, setEndDate, setMenuIsOpenLocation, setMenuIsOpenAuthor} = filterSlice.actions;
export default filterSlice.reducer;