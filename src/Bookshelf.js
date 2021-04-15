import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    booksPerShelf: PropTypes.array.isRequired,
    onRefreshBookshelves: PropTypes.func.isRequired,
  };

  render() {
    const { booksPerShelf, onRefreshBookshelves } = this.props;

    return (
      <ol className="books-grid">
        {booksPerShelf.map((book) => (
          <li key={book.id}>
            <Book book={book} onRefreshBookshelves={onRefreshBookshelves} />
          </li>
        ))}
      </ol>
    );
  }
}

export default Bookshelf;
