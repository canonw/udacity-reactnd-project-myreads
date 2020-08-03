import React from 'react';
import PropTypes from 'prop-types';

const ListBooks = props => {

  const { books, shelfOptions, onHandleChangeSelf } = props;

  let OptionTemplate = Object.keys(shelfOptions)
    //.filter(currentShelf => currentShelf !== shelf)
    .map((key) => <option key={key} value={key} >{shelfOptions[key]}</option>)

  if(!Array.isArray(books) || books.length === 0) {
    return <p>No books found.</p>
  }
  // console.log(books);
  return books.map((book) => 
      <li key={ book.id }>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/200x300?text=%20)`) }}>
            <div className="book-shelf-changer">
            <select defaultValue={ book.shelf } onChange={(e) => { onHandleChangeSelf(book, e.target.value) }}>
                <option value="move" disabled>Move to...</option>
                { OptionTemplate }
              </select>
            </div>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        {
          Array.isArray(book.authors) && 
            book.authors.map((author, i) =>
              (<div className="book-authors" key={ i }>{ author }</div>))
        }
      </div>
      </li>
    )
};

ListBooks.propTypes = {
  onHandleChangeSelf: PropTypes.func.isRequired, 
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBooks;