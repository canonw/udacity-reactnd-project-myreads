import React from 'react';
import PropTypes from 'prop-types';
import ListBook from './ListBook';


const ListBookShelf = props => {

  const { books, shelf, shelfOptions } = props;

  const changeShelf = props.onChangeShelf;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfOptions[shelf] }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            books.map((book) => <ListBook key={ book.id }
              onChangeShelf={ changeShelf }
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
  onChangeShelf: PropTypes.func.isRequired, 
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBookShelf;