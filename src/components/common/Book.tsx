import React from 'react';
// import { Link } from 'react-router-dom';
import { IVolumeInfoType } from '../../types/BaseTypes';

const Book = (props) => {
  const book: IVolumeInfoType = props.book.volumeInfo;
  return (
    <div className="book-card">
      <div className="book-thumbnail">
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      </div>
      <div className="book-description">
        <div>{book.title}</div>
        <div>
          {book.authors
            ? book.authors.length === 1
              ? book.authors[0]
              : book.authors.join(', ')
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Book;
