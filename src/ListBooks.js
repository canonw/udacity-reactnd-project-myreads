import React from 'react';
import PropTypes from 'prop-types';

const ListBooks = props => {

  const { books, shelf, shelfOptions, onHandleChangeSelf } = props;

  let OptionTemplate = Object.keys(shelfOptions)
    //.filter(currentShelf => currentShelf !== shelf)
    .map((key) => <option key={key} value={key} >{shelfOptions[key]}</option>)

  return books.map((book) => 
      <li key={ book.id }>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}>
            <div className="book-shelf-changer">
            <select defaultValue={ shelf } onChange={(e) => { onHandleChangeSelf(book, e.target.value) }}>
                <option value="move" disabled>Move to...</option>
                { OptionTemplate }
              </select>
            </div>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors.join(', ') }</div>
      </div>
      </li>
    )
};

ListBooks.propTypes = {
  onHandleChangeSelf: PropTypes.func.isRequired, 
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBooks;