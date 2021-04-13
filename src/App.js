import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Bookshelf from './Bookshelf';
import SeachBook from './SeachBook';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Bookshelf />} />
        <Route path="/search" render={() => <SeachBook />} />
      </div>
    );
  }
}

export default BooksApp;
