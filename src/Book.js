import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import * as BooksAPI from './BooksAPI';

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
