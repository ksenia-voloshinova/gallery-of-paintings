import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEndDate, setStartDate } from "../../redux/filter/slice";
import "./style.scss";

function SelectDate() {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const [open, setOpen] = useState(false);

  const { startDate, endDate, menuIsOpenLocation, menuIsOpenAuthor } = useSelector((state) => state.filter);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(selectRef.current)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
  }, []);
  
  useEffect(() => {
    if(menuIsOpenLocation || menuIsOpenAuthor){
      setOpen(false);
    }
  },[ menuIsOpenLocation, menuIsOpenAuthor]);

  return (
    <>
      <div className=" filter__input" ref={selectRef}>
        <div className={"filter__input-wrapper " + (open ? "z-index" : "")}>
          <div className="filter__value" onClick={() => setOpen(!open)}>
            <span>Created</span>
            <svg
              className={
                "dropdownIndicator" + (open ? " dropdownIndicator-active" : "")
              }
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" />
            </svg>
          </div>

          {open && (
            <div className="filter__date">
              <input
                type="number"
                placeholder="from"
                value={startDate}
                onChange={(event) => dispatch(setStartDate(event.target.value))}
              />
              &mdash;
              <input
                type="number"
                placeholder="before"
                value={endDate}
                onChange={(event) => dispatch(setEndDate(event.target.value))}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SelectDate;
