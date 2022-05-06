import React from "react";

const Heroes = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.name}</h2>
        <div className="star">
          <i className="far fa-star"></i>
        </div>
      </div>
      <p>
        Height: <span>{data.height}</span>
      </p>
      <p>
        Birth year: <span>{data["birth_year"]}</span>
      </p>
    </div>
  );
};

export default Heroes;
