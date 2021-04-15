import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({ booksPerShelf, onRefreshBookshelves }) => (
  <ol className="books-grid">
    {booksPerShelf.map((book) => (
      <li key={book.id}>
        <Book book={book} onRefreshBookshelves={onRefreshBookshelves} />
      </li>
    ))}
  </ol>
);

Bookshelf.propTypes = {
  booksPerShelf: PropTypes.array.isRequired,
  onRefreshBookshelves: PropTypes.func.isRequired,
};

export default Bookshelf;
