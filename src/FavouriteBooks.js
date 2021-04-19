import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookshelfResults from './BookshelfResults';

class FavouriteBooks extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <div className="back-to-main">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <span>Back To Bookshelves</span>
        </div>
        {/* <BookshelfResults />; */}
      </div>
    );
  }
}

export default FavouriteBooks;
