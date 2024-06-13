import React from "react";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
      ))}
    </div>
  );
};
