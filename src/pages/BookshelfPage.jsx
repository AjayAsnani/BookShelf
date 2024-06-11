import React, { useState, useEffect } from "react";

const BookshelfPage = () => {
  const defaultBooks = [
    { title: "Book 1", author: "Author 1", edition_count: 1 },
    { title: "Book 2", author: "Author 2", edition_count: 2 },
  ];

  const [bookshelf, setBookshelf] = useState(() => {
    const savedBooks = JSON.parse(localStorage.getItem("bookshelf"));
    return savedBooks || defaultBooks;
  });

  useEffect(() => {
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  }, [bookshelf]);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(
      (book) => book.title !== bookToRemove.title
    );
    setBookshelf(updatedBookshelf);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold">Book Title: {book.title}</h2>
            <p>
              <span className="font-bold">Book Author: </span>
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Edition Count:</span>{" "}
              {book.edition_count}
            </p>
            <button
              onClick={() => removeFromBookshelf(book)}
              className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
