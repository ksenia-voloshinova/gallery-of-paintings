import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("allData/fetchData", async () => {
  const response = await axios
    .all([
      await axios.get("https://test-front.framework.team/paintings"),
      await axios.get("https://test-front.framework.team/authors"),
      await axios.get("https://test-front.framework.team/locations"),
    ])
    .then((data) => {
      return data;
    });
  return [response[0].data, response[1].data, response[2].data];
});

export const fetchPaintingsFiltred = createAsyncThunk(
  "paintings/fetchPaintingsFiltred",
  async ({
    location,
    author,
    search,
    createdGte,
    createdLte,
    pageNumber,
    paintingsPerPage,
  }) => {
    const { data } = await axios.get(
      `https://test-front.framework.team/paintings?_page=${pageNumber}&_limit=${paintingsPerPage}&${location}&${author}&${search}&${createdGte}&${createdLte}`
    );
    return data;
  }
);
