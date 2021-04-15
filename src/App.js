import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookshelvesPage from './BookshelvesPage';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
  }

  refreshBookshelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookshelvesPage books={books} onRefreshBookshelves={this.refreshBookshelves} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              booksByShelf={booksByShelf}
              onRefreshBookshelves={this.refreshBookshelves}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
