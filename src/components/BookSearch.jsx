import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=programming&limit=5&page=1"
        );
        setResults(response.data.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching default books:", error);
      }
    };

    fetchDefaultBooks();
  }, []);

  const searchBooks = async (q) => {
    if (q.length > 2) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
        );
        setResults(response.data.docs);
      } catch (error) {
        console.error("Error fetching data from Open Library API", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchBooks(e.target.value);
        }}
        placeholder="Search for books..."
        className="w-full p-2 border rounded mb-4"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              onAddToBookshelf={onAddToBookshelf}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
