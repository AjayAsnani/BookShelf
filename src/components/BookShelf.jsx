import React from "react";

const Bookshelf = ({ bookshelf }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>
    {bookshelf.length === 0 ? (
      <p>Your bookshelf is empty</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="border rounded p-4 m-2 shadow-md">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p>
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Bookshelf;
