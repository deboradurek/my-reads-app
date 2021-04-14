import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired,
  };

  updateShelf = (event) => {
    const chosenShelf = event.target.value;
    this.props.onUpdateShelf(chosenShelf);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          name="bookshelf-selector"
          defaultValue="currentlyReading"
          onChange={this.updateShelf}
        >
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
  }
}

export default BookshelfChanger;
