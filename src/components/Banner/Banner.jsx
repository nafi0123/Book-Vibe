import React from "react";
import bookimage from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center rounded-[24px] bg-[rgba(19,19,19,0.05)] px-8 md:px-16 py-12 md:py-20 text-center md:text-left">
      
      {/* Text Section */}
      <div className="max-w-xl mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
          Books to freshen up your bookshelf
        </h1>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md hover:shadow-lg transition duration-300">
          View The List
        </button>
      </div>

      {/* Image Section */}
      <div className="shrink-0">
        <img
          className="w-[318px] h-[394px] object-contain"
          src={bookimage}
          alt="Book Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
