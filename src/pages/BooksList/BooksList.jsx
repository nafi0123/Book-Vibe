import React from "react";
import Book from "../Book/Book";

const BooksList = ({ books }) => {
  if (!books.length) {
    return <p className="text-center text-gray-500 mt-6">No books to show.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Book key={book.bookId} singleBook={book} />
      ))}
    </div>
  );
};

export default BooksList;
