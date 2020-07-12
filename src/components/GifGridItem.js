import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card animate__animated animate__fadeIn">
      <li className="titleGridItem">{title}</li>
      <img src={url} alt={title} className="imgGridItem " />
    </div>
  );
};
