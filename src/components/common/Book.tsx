import React from 'react';
// import { Link } from 'react-router-dom';

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-cover">
        <img
          src={props.volumeInfo.imageLinks.thumbnail}
          alt={props.volumeInfo.title}
        />
      </div>
    </div>
  );
};

export default Book;
