import React, { Component } from 'react';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import BookshelvesPage from './views/BookshelvesPage/BookshelvesPage';
import SearchBookPage from './views/SearchBookPage/SearchBookPage';
import FavouriteBooksPage from './views/FavouriteBooksPage/FavouriteBooksPage';
import { Route } from 'react-router-dom';
import Loading from './components/Loading';

class BooksApp extends Component {
  state = {
    books: [],
    loading: false,
  };

  componentDidMount() {
    this.handleRefreshBookshelves();
  }

  // Callback for Book component, that updates a single book's shelf
  updateBook = (bookId, shelf) => {
    this.setState({ loading: true });

    BooksAPI.update(bookId, shelf).then(() => {
      this.handleRefreshBookshelves();
    });
  };

  // Get all books from endpoint /books
  handleRefreshBookshelves = () => {
    this.setState({ loading: true });

    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
        loading: false,
      });
    });
  };

  render() {
    const { books, loading } = this.state;

    // New array containing bookId and current shelf
    const booksByShelf = books.reduce(
      (acc, book) => ({
        ...acc,
        [book.id]: book.shelf,
      }),
      {}
    );

    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route
          exact
          path="/"
          render={() => <BookshelvesPage books={books} onUpdateBook={this.updateBook} />}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBookPage booksByShelf={booksByShelf} onUpdateBook={this.updateBook} />
          )}
        />
        <Route
          path="/favourites"
          render={() => <FavouriteBooksPage books={books} onUpdateBook={this.updateBook} />}
        />
        {loading && <Loading />}
      </div>
    );
  }
}

export default BooksApp;
