import React from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = ({ onUpdateShelf, shelf }) => {
  const updateShelf = (event) => {
    const chosenShelf = event.target.value;
    onUpdateShelf(chosenShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select name="bookshelf-selector" defaultValue={shelf} onChange={updateShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  onUpdateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string,
};

export default BookshelfChanger;
