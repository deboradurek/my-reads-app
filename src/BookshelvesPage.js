import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookshelfMain from './BookshelfMain';
import { DragDropContext } from 'react-beautiful-dnd';

const BookshelvesPage = ({ books, onUpdateBook }) => {
  const shelves = [
    { title: 'Currently Reading', id: 'currentlyReading' },
    { title: 'Want to Read', id: 'wantToRead' },
    { title: 'Read', id: 'read' },
  ];

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (destination) {
      if (destination.droppableId !== source.droppableId) {
        onUpdateBook(draggableId, destination.droppableId);
      }
    }
  };

  return (
    <div className="list-books-content">
      <div className="list-books">
        <DragDropContext onDragEnd={onDragEnd}>
          {shelves.map((shelf, index) => (
            <div key={shelf.id} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookshelfMain
                  shelfId={shelf.id}
                  booksPerShelf={books.filter((book) => book.shelf === shelf.id)}
                  onUpdateBook={onUpdateBook}
                />
              </div>
            </div>
          ))}
        </DragDropContext>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookshelvesPage.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookshelvesPage;
