import React, { useRef, useEffect, useState } from "react";
import GlobalAPi from "../services/GlobalAPi";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();


  useEffect(() => {
    fetchTrendingVideos();
  }, []);

  const fetchTrendingVideos = () => {
    GlobalAPi.getTrendingVideos()
      .then((response) => {
        console.log(response.data.results);
        setMoviesList(response.data.results);
      })
    //   .catch((error) => {
    //     console.error("Error fetching trending videos:", error);
    //   });
  };

  const sliderRight = (element) => {
    element.scrollLeft+=screenWidth-110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft-=screenWidth-110;
  };

  return (
    <div>  
         <HiChevronLeft className="hidden md:block  text-white text-[30px] absolute mx-8 mt-[180px] cursor-pointer" 
         onClick={() => sliderLeft(elementRef.current)}/>
         <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[180px] right-0 cursor-pointer right-0"
         onClick={() => sliderRight(elementRef.current)}/>

    <div className="flex overflow-x-auto w-full px-16 py-8 scrollbar-hide scroll-smooth"ref={elementRef}>
      {moviesList.map((item, index) =>
        item.backdrop_path && (
          <img
            // key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-[50%_35%] mr-5 rounded-md hover:border-[4px] border-gray-400 cursor-pointer transition-all duration-100 ease-in"
            // alt={item.title || item.name}
          />
        )
      )}
    </div>
    </div>
  );
};

export default Slider;
