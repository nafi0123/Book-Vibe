import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
      <h1 className="text-4xl font-extrabold text-center text-green-600 mb-10">
        Our Book Collection
      </h1>

      <Suspense
        fallback={
          <div className="text-center text-gray-500 text-lg py-10">Loading...</div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Books;
