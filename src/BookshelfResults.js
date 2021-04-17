import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookshelfResults = ({ booksPerShelf, onUpdateBook }) => (
  <ol className="books-grid">
    {booksPerShelf.map((book) => (
      <li key={book.id}>
        <Book book={book} onUpdateBook={onUpdateBook} />
      </li>
    ))}
  </ol>
);

BookshelfResults.propTypes = {
  booksPerShelf: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookshelfResults;
