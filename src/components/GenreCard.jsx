import React from "react";
import Carousel from "..components/Carousel";
import { Droplet, ShieldLock, Building, Mask, Film, ArrowUp, Robot, Newspaper, People } from "react-bootstrap-icons";

export default function GenreCards() {
  const genresList = [
    'Personal Growth',
    'True Crime & Investigative Journalism',
    'History',
    'Comedy',
    'Entertainment',
    'Business',
    'Fiction',
    'News',
    'Kids & Family'
  ];

  const genreIcons = [
    Droplet,
    ShieldLock,
    Building,
    Mask,
    Film,
    ArrowUp,
    Robot,
    Newspaper,
    People
  ];

  const genreCards = genresList.map((genre, index) => (
    <div key={index} className="bg-gray-400 text-center text-gray-800 font-light aspect-square h-10% flex-col flex justify-center items-center">
      {React.createElement(genreIcons[index], { className: "h-[30%]" })}
      <h3 className="text-xs">{genre}</h3>
    </div>
  ));

  return (
    <>
      <Carousel name="Genres" cards={genreCards} />
    </>
  );
}
