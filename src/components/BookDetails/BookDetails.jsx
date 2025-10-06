import React from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addToStoredDB } from "../../Utility/Utility";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { wish, setWish } = useOutletContext();
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-500">
        Book not found!
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "Book added to Read list!",
      icon: "success",
      confirmButtonColor: "#10b981",
    });
    addToStoredDB(id);
    // Your existing logic to add to stored DB
  };

  const handleAddToWishlist = () => {
    console.log(wish);
    const isAlreadyInWish = wish.some(
      (book) => book.bookId === singleBook.bookId
    );

    if (isAlreadyInWish) {
      MySwal.fire({
        title: "Already Added!",
        text: "This book is already in your Wishlist!",
        icon: "info",
        confirmButtonColor: "#3b82f6",
      });
      return;
    }

    setWish([...wish, singleBook]);

    MySwal.fire({
      title: "Added!",
      text: "Book added to your Wishlist!",
      icon: "success",
      confirmButtonColor: "#3b82f6",
    });
  };

  return (
    <div className="w-4/5 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">
      {/* Left: Book Image */}
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={bookName}
          className="w-64 h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Right: Book Details */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{bookName}</h2>
        <p className="text-gray-600 mb-1">
          By: <span className="font-medium">{author}</span>
        </p>
        <p className="text-gray-500 mb-4">{category}</p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-1">Review:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Book Info */}
        <div className="space-y-1 text-sm text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Number of Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Mark as Read
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
