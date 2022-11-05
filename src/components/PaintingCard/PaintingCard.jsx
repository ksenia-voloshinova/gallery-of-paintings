import React, { useState } from "react";
import {useSelector } from "react-redux";
import "./style.scss";

function PaintingCard( obj) {
  const name = obj.name;
  const imageUrl = obj.imageUrl;
  const created = obj.created;
  const authorId = obj.authorId;
  const locationId = obj.locationId;

  const { authors, locations } = useSelector((state) => state.allData);

  const [open, setOpen] = useState(false);

  let author = authors.find(item => item.id === authorId);
  let location = locations.find(item => item.id === locationId);

  const url = "https://test-front.framework.team" + imageUrl;
  return (
    <>
      <div className="content__card" onMouseOver ={() => (setOpen(true))} onMouseOut={() => (setOpen(false))}>
      <img src={url} key={name} alt={name} />        
        <div className="content__card-description">
          <h3 className="description__name">{name}</h3>
          {open && ( 
            <div className="content__card-active">
              <div className="description__details" ><span>Author:</span>{author.name}</div>
              <div className="description__details"><span>Created:</span> {created}</div>
              <div className="description__details"><span>Location:</span> {location.location}</div> 
            </div>
          )}
                 
        </div>
      </div>
    </>
  );
}

export default PaintingCard;
