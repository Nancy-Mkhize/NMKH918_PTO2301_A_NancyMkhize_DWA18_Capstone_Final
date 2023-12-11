import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Carousel(props) {
  const { name, cards } = props;

  return (
    <div className="carousel-container">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <div className="carousel-wrapper flex items-center overflow-hidden">
        <FaAngleLeft className="text-3xl cursor-pointer" />
        <div className="carousel-content flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 space-x-4 p-4">
          {cards.map((card, index) => (
            <div key={index} className="carousel-card flex-none w-40">
              {card}
            </div>
          ))}
        </div>
        <FaAngleRight className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
