import React from "react";

export const CardList = ({ list }) => (
  <div>
    {list.map(element => (
      <h1 key={element.id}>{element.name}</h1>
    ))}
  </div>
);
