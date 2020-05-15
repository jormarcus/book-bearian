import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';

const BookList = (props) => {
  return (
    <div className="book-list-container">
      {props.books && props.books.length > 0
        ? props.books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })
        : 'There are no books'}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.bookList
});

export default connect(mapStateToProps)(BookList);
