import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class BookshelvesPage extends Component {
  // static propTypes = {};

  render() {
    const shelves = [
      { title: 'Currently Reading', term: 'currentlyReading' },
      { title: 'Want to Read', term: 'wantToRead' },
      { title: 'Read', term: 'read' },
    ];

    return (
      <div className="list-books-content">
        <div className="list-books">
          {shelves.map((shelf) => (
            <div key={shelf.term} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BookshelvesPage;
