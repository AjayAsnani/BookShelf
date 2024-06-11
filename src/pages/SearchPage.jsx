import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookSearch from "../components/BookSearch";

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );
  const navigate = useNavigate();

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Search by Book Name</h1>
      <BookSearch onAddToBookshelf={addToBookshelf} />
      <button
        onClick={() => navigate("/bookshelf")}
        className="mt-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
