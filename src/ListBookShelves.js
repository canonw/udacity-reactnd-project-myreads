import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks'

const ListBookShelves = props => {

  const { books, onHandleChangeSelf, shelfOptions } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["currentlyReading"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "currentlyReading")}
                shelfOptions={ shelfOptions }
                onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["wantToRead"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "wantToRead")}
                shelfOptions={ shelfOptions }
                onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["read"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "read")}
                shelfOptions={ shelfOptions }
                onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      </div>
      <div className="open-search">
        <Link to='/search' >Add a book</Link>
      </div>

    </div>
  );
};

ListBookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onHandleChangeSelf: PropTypes.func.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBookShelves;