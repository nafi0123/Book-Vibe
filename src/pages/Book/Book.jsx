import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card w-80 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 cursor-pointer flex flex-col h-[450px]">
        <figure className="flex justify-center mb-4 bg-gray-100 rounded-md p-3 flex-shrink-0">
          <img
            className="h-40 object-contain"
            src={image}
            alt={`Cover of ${bookName}`}
          />
        </figure>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="card-title text-xl font-bold mb-1 flex items-center justify-between">
          {bookName}
          <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-md">
            {yearOfPublishing}
          </span>
        </h2>

        <p className="text-gray-600 mb-2 text-sm">By {publisher}</p>
        <p className="text-gray-500 italic text-sm mb-4 flex-grow">{author}</p>

        <div className="border-t border-dashed border-gray-300 mb-4"></div>

        <div className="flex justify-between items-center mt-auto">
          <span className="badge badge-outline bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">
            {category}
          </span>
          <span className="badge badge-outline bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
            {rating} <FaStarHalfAlt className="text-yellow-600" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
