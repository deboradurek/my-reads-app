import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const BookshelvesPage = ({ books, onRefreshBookshelves }) => {
  const shelves = [
    { title: 'Currently Reading', term: 'currentlyReading' },
    { title: 'Want to Read', term: 'wantToRead' },
    { title: 'Read', term: 'read' },
  ];

  return (
    <div className="list-books-content">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {shelves.map((shelf) => (
          <div key={shelf.term} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <Bookshelf
                booksPerShelf={books.filter((book) => book.shelf === shelf.term)}
                onRefreshBookshelves={onRefreshBookshelves}
              />
            </div>
          </div>
        ))}
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookshelvesPage.propTypes = {
  books: PropTypes.array.isRequired,
  onRefreshBookshelves: PropTypes.func.isRequired,
};

export default BookshelvesPage;
