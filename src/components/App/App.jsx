import React, { useEffect } from "react";
import Content from "../Content";
import Filter from "../Filter";
import Header from "../Header";
import Pagination from "../Pagination";
import { fetchData, fetchPaintingsFiltred } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.filteredPaintings);
  const { locationId, authorId, searchValue, startDate, endDate } = useSelector((state) => state.filter);
  const { pageNumber, paintingsPerPage } = useSelector((state) => state.pagination);

  const getPaintings = async () => {
    const location = locationId > 0 ? `locationId=${locationId}` : "";
    const author = authorId > 0 ? `authorId=${authorId}` : "";
    const search = searchValue === "" ? "" : `q=${searchValue.toLowerCase()}`;
    const createdGte = startDate ? `created_gte=${startDate}` : "";
    const createdLte = endDate ? `created_lte=${endDate}` : "";
    
    dispatch(
      fetchPaintingsFiltred({
        location,
        author,
        search,
        createdGte,
        createdLte,
        pageNumber,
        paintingsPerPage,
      })
    );
  };

  useEffect(() => {
    getPaintings();
  }, [locationId, authorId, searchValue, startDate, endDate, pageNumber]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      {status === "loading" ? <div>Loading...</div> : <Content />}
      <Pagination />
    </div>
  );
}

export default App;
