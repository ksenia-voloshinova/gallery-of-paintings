import React from "react";
import Select, { components } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorId } from "../../redux/filter/slice";
import "./style.scss";
import { useState } from "react";

function SelectAuthor() {
  const dispatch = useDispatch();
  const { authors } = useSelector((state) => state.allData);
  const { authorId } = useSelector((state) => state.filter);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChangeOption = (obj) => {
    if (obj) {
      dispatch(setAuthorId(obj.id));
    } else {
      dispatch(setAuthorId(0));
    }
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width="10"
          height="6"
          className={"dropdownIndicator" + (isMenuOpen ? " dropdownIndicator-active" : "")}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" 
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const optionsAuthor = authors.map(({ ...author }) => ({
    id: author.id,
    value: author.name,
    label: author.name,
  }));

  const getValue = () => {
    return authorId ? optionsAuthor.find((loc) => loc.id === authorId) : "";
  };
  
  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="filter__select">
      <Select
        components={{ DropdownIndicator }}
        classNamePrefix="custom-select"
        placeholder="Author"
        onChange={(e) => onChangeOption(e)}
        value={getValue()}
        options={optionsAuthor}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        isClearable
      />
    </div>
  );
}

export default SelectAuthor;
