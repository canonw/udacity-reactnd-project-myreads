import React from 'react';
import PropTypes from 'prop-types';
import ListBook from './ListBook';

const ListBookShelf = props => {

  const { books, shelf, shelfOptions } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfOptions[shelf] }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            books.map((book) => <ListBook key={ book.id }
              book={ book }
              shelf={ shelf }
              shelfOptions={ shelfOptions }/>)
          }
          </ol>
        </div>
      </div>
    </div>
  );
};

ListBookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBookShelf;