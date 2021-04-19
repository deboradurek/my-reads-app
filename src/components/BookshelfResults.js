import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookshelfResults = ({ booksByShelf, onUpdateBook }) => (
  <ol className="books-grid">
    {booksByShelf.map((book) => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={onUpdateBook} />
      </li>
    ))}
  </ol>
);

BookshelfResults.propTypes = {
  booksByShelf: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookshelfResults;
