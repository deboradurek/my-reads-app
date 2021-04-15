import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onRefreshBookshelves: PropTypes.func.isRequired,
  };

  handleUpdateShelf = (newShelf) => {
    BooksAPI.update(this.props.book, newShelf).then(() => {
      this.props.onRefreshBookshelves();
    });
  };

  render() {
    const { book } = this.props;
    // console.log(book);

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
          <BookshelfChanger onUpdateShelf={this.handleUpdateShelf} shelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
