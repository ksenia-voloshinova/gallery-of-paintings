import React from "react";
import SelectAuthor from "../SelectAuthor";
import SelectDate from "../SelectDate";
import SelectLocation from "../SelectLocation";
import SearchForName from "../SearchForName";
import "./style.scss";
function Filter() {
  return (
    <div className="filter ">
      <div className="container">
        <div className="filter__wrapper">
          <SearchForName/>
          <SelectAuthor/>
          <SelectLocation/>
          <SelectDate/>
        </div>
      </div>
    </div>
  );
}

export default Filter;