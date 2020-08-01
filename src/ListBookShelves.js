import React from 'react';
import PropTypes from 'prop-types';

const ListBookShelves = props => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ props.shelfOptions[props.shelf] }</h2>
        <div className="bookshelf-books">
        TBD
        </div>
      </div>
    </div>
  );
};

ListBookShelves.PropTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBookShelves;