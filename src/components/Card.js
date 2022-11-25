import React from "react";

export const Card = ({ imagePath, title, price, location, time }) => {
  return (
    <div className="card">
      <a href="#">
        <img className="card-img-top" src={imagePath} alt={title} />
      </a>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p className="card-text mb-2">
            <a href="#" className="text-decoration-none">
              {title}
            </a>
          </p>
          <i className="fa-regular fa-heart"></i>
        </div>
        <h5 className="card-title">{price}</h5>
      </div>
      <div className="card-footer pt-0">
        <div>
          <span>{location}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
