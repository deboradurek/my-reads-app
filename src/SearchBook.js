import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

class SearchBook extends Component {
  //   static propTypes = {};

  state = {
    query: '',
    booksFound: [],
  };

  handleQuery = (event) => {
    const value = event.target.value;

    this.setState(() => ({
      query: value,
    }));

    this.updateBooksFound(value);
  };

  updateBooksFound = throttle((searchTerm) => {
    const { booksByShelf } = this.props;

    searchTerm &&
      BooksAPI.search(searchTerm).then((foundBooks) => {
        if (!foundBooks.error) {
          const updateFoundBooks = foundBooks.map((foundBook) => ({
            ...foundBook,
            shelf: booksByShelf[foundBook.id] ?? 'none',
          }));
          this.setState({
            booksFound: updateFoundBooks,
          });
        } else {
          this.setState({
            booksFound: [],
          });
        }
      });
  }, 250);

  render() {
    const { query, booksFound } = this.state;
    const { onRefreshBookshelves } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <form className="search-books-input-wrapper" onChange={this.handleQuery}>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" />
          </form>
        </div>
        <div className="search-books-results">
          {query !== '' && (
            <Bookshelf booksPerShelf={booksFound} onRefreshBookshelves={onRefreshBookshelves} />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBook;
