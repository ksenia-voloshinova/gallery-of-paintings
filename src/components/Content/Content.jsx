import React from "react";
import { useSelector } from "react-redux";
import PaintingCard from "../PaintingCard/PaintingCard";
import "./style.scss";

function Content() {
  const { filtredItems} = useSelector((state) => state.filteredPaintings);
  const { status } = useSelector((state) => state.allData);

  return (
      <div className="content">
        {status !== "loading" ?  filtredItems.map((obj) => (
          <PaintingCard key={obj.id} {...obj} />
        )) : ""}
      </div>    
  );
}

export default Content;