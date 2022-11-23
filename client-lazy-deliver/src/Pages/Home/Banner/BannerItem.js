import React from "react";
import "./BannerItem.css";
import { Link } from "react-router-dom";

const BannerItem = ({ slide }) => {
  const { id, prev, next, img, title, description } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full"
      data-theme="lofi"
    >
      <div className="carousel-img">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className="text-6xl font-bold text-white mb-5">{title}</h1>
        <p className="text-xl text-white w-96 mt-4">{description}</p>\
        <div className="my-5">
          <Link to="/services">
            <button className="btn btn-primary mr-5">
              Explore Our Services
            </button>
          </Link>
          <Link to="/blog">
            <button className="btn btn-outline btn-primary">
              Read Our Blogs
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
