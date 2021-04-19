import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';
import CoverNotFound from '../images/default_book_cover.jpg';
import StarBorder from '../icons/star-border.svg';
import StarSolid from '../icons/star-solid.svg';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
  };

  state = {
    favourite: localStorage.getItem(this.props.book.id) === 'true',
  };

  handleUpdateShelf = (newShelf) => {
    this.props.onUpdateBook(this.props.book.id, newShelf);
  };

  setFavourite = () => {
    const stared = !this.state.favourite;
    localStorage.setItem(this.props.book.id, stared);
    this.setState({
      favourite: stared,
    });
  };

  render() {
    const { book } = this.props;
    const starImage = this.state.favourite ? StarSolid : StarBorder;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="favourite-book"
            style={{ backgroundImage: `url("${starImage}")` }}
            onClick={this.setFavourite}
          ></div>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${book.imageLinks?.thumbnail ?? CoverNotFound}")`,
            }}
          ></div>
          <BookshelfChanger onUpdateShelf={this.handleUpdateShelf} shelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
