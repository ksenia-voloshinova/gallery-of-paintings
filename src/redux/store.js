import { configureStore } from "@reduxjs/toolkit";
import allData from "./allData/slise";
import filteredPaintings from "./filtredPaintings/slise";
import filter from "./filter/slice";
import pagination from "./pagination/slice";

export const store = configureStore({
    reducer: {
        allData,
        filteredPaintings,
        filter,
        pagination
    }
});