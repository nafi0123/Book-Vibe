import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/Utility";
import BooksList from "../BooksList/BooksList";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  // Wish state from context
  const { wish } = useOutletContext();

  // Read list from local storage
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  // Sort handler
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Sort Dropdown */}
      <details className="dropdown mb-6">
        <summary className="btn m-1 cursor-pointer">
          Sort by: {sort ? sort : "Select"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          <li>
            <button onClick={() => handleSort("pages")}>Pages</button>
          </li>
          <li>
            <button onClick={() => handleSort("ratings")}>Ratings</button>
          </li>
        </ul>
      </details>

      {/* Tabs */}
      <Tabs>
        {/* Custom TabList with toggle style */}
        <TabList className="flex justify-center bg-gray-100 rounded-full mb-6 p-1 max-w-md mx-auto">
          <Tab
            className={({ selected }) =>
              `flex-1 text-center py-2 px-4 text-sm font-medium rounded-full transition-all cursor-pointer 
              ${
                selected
                  ? "bg-emerald-500 text-white shadow"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            📘 Read Books
          </Tab>
          <Tab
            className={({ selected }) =>
              `flex-1 text-center py-2 px-4 text-sm font-medium rounded-full transition-all cursor-pointer 
              ${
                selected
                  ? "bg-sky-500 text-white shadow"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            💫 Wishlist
          </Tab>
        </TabList>

        {/* Read Books Panel */}
        <TabPanel>
          <h2 className="text-xl font-semibold mb-4">
            Books I Read ({readList.length})
          </h2>
          {readList.length > 0 ? (
            <BooksList books={readList} />
          ) : (
            <p className="text-gray-500">No books marked as read yet.</p>
          )}
        </TabPanel>

        {/* Wishlist Panel */}
        <TabPanel>
          <h2 className="text-xl font-semibold mb-4">
            My Wish List ({wish.length})
          </h2>
          {wish.length > 0 ? (
            <BooksList books={wish} />
          ) : (
            <p className="text-gray-500">No items in wish list yet.</p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
