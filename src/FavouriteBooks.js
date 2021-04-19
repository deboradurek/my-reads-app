import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookshelfResults from './BookshelfResults';

const FavouriteBooks = ({ books, onUpdateBook }) => {
  return (
    <div>
      <div className="back-to-main">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <span>Back To Bookshelves</span>
      </div>
      <div className="search-books-results">
        <BookshelfResults onUpdateBook={onUpdateBook} />
      </div>
    </div>
  );
};

FavouriteBooks.prototypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default FavouriteBooks;
