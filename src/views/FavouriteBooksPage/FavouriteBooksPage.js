import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookshelfResults from '../../components/BookshelfResults';

const FavouriteBooksPage = ({ books, onUpdateBook }) => {
  // New array containing only favourited books
  const favouriteList = books.filter((book) => localStorage.getItem(book.id) === 'true');

  return (
    <div>
      <div className="back-to-main">
        <Link to="/" className="close-search">
          Close
        </Link>
        <span>Back To Bookshelves</span>
      </div>
      <div className="search-books-results">
        {favouriteList.length > 0 ? (
          <BookshelfResults booksByShelf={favouriteList} onUpdateBook={onUpdateBook} />
        ) : (
          <p className="no-books-message">You don't have any favourite books, yet!</p>
        )}
      </div>
    </div>
  );
};

FavouriteBooksPage.prototypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default FavouriteBooksPage;
