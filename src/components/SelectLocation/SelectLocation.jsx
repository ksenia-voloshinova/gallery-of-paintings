import React from "react";
import Select, { components } from "react-select";
import { setLocationId, setMenuIsOpenLocation } from "../../redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function SelectLocation() {
  const dispatch = useDispatch();
  const { locationId, menuIsOpenLocation } = useSelector((state) => state.filter);
  const { locations } = useSelector((state) => state.allData);

  const onChangeOption = (obj) => {
    if (obj) {
      dispatch(setLocationId(obj.id));
    } else {
      dispatch(setLocationId(0));
    }
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          className={
            "dropdownIndicator" +
            (menuIsOpenLocation ? " dropdownIndicator-active" : "")
          }
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const optionsLocation = locations.map(({ ...location }) => ({
    id: location.id,
    value: location.location,
    label: location.location,
  }));

  const getValue = () => {
    return locationId
      ? optionsLocation.find((loc) => loc.id === locationId)
      : "";
  };

  const onMenuOpen = () => dispatch(setMenuIsOpenLocation(true));
  const onMenuClose = () => dispatch(setMenuIsOpenLocation(false));

  return (
    <div className="filter__select">
      <Select
        components={{ DropdownIndicator }}
        classNamePrefix="custom-select"
        placeholder="Location"
        onChange={(e) => onChangeOption(e)}
        value={getValue()}
        options={optionsLocation}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        isClearable
      />
    </div>
  );
}

export default SelectLocation;
