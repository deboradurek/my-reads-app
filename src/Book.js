import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';
import * as BooksAPI from './BooksAPI';
import coverNotFound from './images/default_book_cover.jpg';

const Book = ({ book, onRefreshBookshelves }) => {
  const handleUpdateShelf = (newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      onRefreshBookshelves();
    });
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url("${book.imageLinks?.thumbnail ?? coverNotFound}")`,
          }}
        ></div>
        <BookshelfChanger onUpdateShelf={handleUpdateShelf} shelf={book.shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.join(', ')}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onRefreshBookshelves: PropTypes.func.isRequired,
};

export default Book;
