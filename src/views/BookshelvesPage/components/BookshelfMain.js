import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../../components/Book';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const BookshelfMain = ({ shelfId, booksPerShelf, onUpdateBook }) => (
  <Droppable droppableId={shelfId} direction="horizontal" type="COLUMN">
    {(provided) => (
      <ol className="books-grid" ref={provided.innerRef} {...provided.droppableProps}>
        {booksPerShelf.map((book, index) => (
          <Draggable key={book.id} draggableId={book.id} index={index}>
            {(provided) => (
              <li
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Book book={book} onUpdateBook={onUpdateBook} />
              </li>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </ol>
    )}
  </Droppable>
);

BookshelfMain.propTypes = {
  booksPerShelf: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookshelfMain;
