import React from "react";
import img1 from "../../../Assets/banner/1.png";
import img2 from "../../../Assets/banner/2.png";
import img3 from "../../../Assets/banner/3.png";
import img4 from "../../../Assets/banner/4.png";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    id: 1,
    prev: 4,
    next: 2,
    img: img1,
    title: "Fresh Food",
    description:
      "Fresh food is the best food. We provide fresh food for you. Since 2020, we have been providing fresh food for you. We are the best food provider in the world. We provide fresh food for you.",
  },
  {
    id: 2,
    prev: 1,
    next: 3,
    img: img2,
    title: "Fastest Delivery",
    description:
      "LazyDeliver is always hungry to serve. We provide fastest delivery service for you. Since 2020, we have been providing fastest delivery service for you. We are the best delivery service provider in the world. We provide fastest delivery service for you.",
  },
  {
    id: 3,
    prev: 2,
    next: 4,
    img: img3,
    title: "Best Quality",
    description:
      "We have best quality products. We provide best quality food for you. Since 2020, we have been providing best quality food for you. We are the best food provider in the world. We provide best quality food for you.",
  },
  {
    id: 4,
    prev: 3,
    next: 1,
    img: img4,
    title: "Best Price",
    description:
      "Best price with top level service.  We provide best price for you. Since 2020, we have been providing best price for you. We are the best food provider in the world. We provide best price for you.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
