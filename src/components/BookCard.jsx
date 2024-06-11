import React from "react";

const BookCard = ({ book, onAddToBookshelf }) => (
  <div className="border rounded p-4 m-2 shadow-md">
    <h3 className="text-xl font-bold">
      <span>Book Title: </span>
      {book.title}
    </h3>
    <p>
      <span className="font-bold">Book Author: </span>
      {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
    </p>
    <p>
      <span className="font-bold">Edition Count: </span>
      {book.edition_count}
    </p>
    <button
      onClick={() => onAddToBookshelf(book)}
      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      Add to Bookshelf
    </button>
  </div>
);

export default BookCard;
