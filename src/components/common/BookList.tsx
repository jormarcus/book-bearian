import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = (props) => {
  return (
    <div className="book-list-container">
      {props.books && props.books.length > 0
        ? props.books.map((book) => {
            return <Book key={book.id} book={book} />;
          })
        : 'There are no books'}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.bookList
});

export default connect(mapStateToProps, null)(BookList);
