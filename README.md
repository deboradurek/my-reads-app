# MyReads Project

This project is part of the requirements for the React Nanodegree Program, by Udacity. It is also the final assessment project for the React Fundamentals course.

## About MyReads

**MyReads project** is a bookshelf app that allows you to select and categorize books you are currently reading, want to read or have read. You can also search for new books to be added to any of the existing sheves.

- The main page displays a list of shelves: Currently Reading, Want to Read, Read.
- Each book has a control that lets you select its shelf.
- When you select a different shelf using the control, the book moves there.
- There is a search page that allows you to find books to add to your library.
- The search page has a text input that is used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.
- When a book is on a bookshelf, it has the same state on both the main page and the search page.
- The search page also has a link to / (the root URL), which leads back to the main page.
- When you navigate back to the main page from the search page, you instantly see all of the selections made on the search page in your library.

The project emphasizes using React to build the application and provides an API server and client library that is used to persist information as you interact with the application.

A simple starter template was provided by Udacity to save time. It contained a static example of the CSS and HTML markup to be used, without any of the React code needed to complete the project. Interactivity was added to the app by refactoring the initial static code.

## Extra Features

Features that were not required by the project rubric were added. They are mentioned here:

- Drag and Drop between shelves on the main page.
- Option to favourite a book.
- Custom CSS and small styling effects.

## Getting Started

All you need to get started is here:

- Install all project dependencies with `npm install`
- Start the development server with `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains all the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall) = This collection represents the books currently in the bookshelves in your app.
- [`update`](#update) = Used to update the shelf of a book.
- [`search`](#search) = These books are raw results only. They do not know which shelf they are on.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
