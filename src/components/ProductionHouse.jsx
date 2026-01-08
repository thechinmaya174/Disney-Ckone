import React from "react";

import disney from "../assets/Images/disney.png";
import pixar from "../assets/Images/pixar.png";
import marvel from "../assets/Images/marvel.png";
import starwars from "../assets/Images/starwar.png";
import natgeo from "../assets/Images/nationalG.png";

import disneyV from "../assets/Videos/disneyV.mp4";
import pixarV from "../assets/Videos/pixarV.mp4";
import marvelV from "../assets/Videos/marvelV.mp4";
import starwarsV from "../assets/Videos/starwarsV.mp4";
import nationalGeographicV from "../assets/Videos/nationalGeographicV.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsV,
    },
    {
      id: 5,
      image: natgeo,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="group border-[2px] border-gray-600 rounded-lg 
                     overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out 
                    cursor-pointer relative" >
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 group-hover:opacity-50"/>

          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
