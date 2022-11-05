import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";
import "./style.scss";


function SearchForName() {
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.filter);

  const onChangeSearchValue = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div className="filter__select">
      <input  className="filter__input-name" placeholder="Name" value={searchValue} onChange={onChangeSearchValue}/>
    </div>
  );
}

export default SearchForName;
