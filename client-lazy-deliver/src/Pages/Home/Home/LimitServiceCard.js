import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const LimitServiceCard = ({ limitService }) => {
  const { _id, title, description, price, image } = limitService;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl" data-theme="lofi">
        <figure className="px-3 pt-3">
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="" className="rounded-md h-72" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-2xl font-bold">${price}</p>
          <div className="card-actions">
            <Link to={`/service/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitServiceCard;
