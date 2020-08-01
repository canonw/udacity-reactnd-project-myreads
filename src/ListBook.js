import React from 'react';
import PropTypes from 'prop-types';

const ListBook = props => {

  const { book, shelf, shelfOptions } = props;

  // const changeShelf = props.onChangeShelf;

  // const changeShelf = (event) => {
  //   console.log(event.target.value);
  //   props.onChangeShelf(event);
  // };

  let OptionTemplate = Object.keys(shelfOptions)
    .filter(currentShelf => currentShelf !== shelf)
    .map((key) => <option key={key} value={key} >{shelfOptions[key]}</option>)

  return (
    <li key={ props.book.id }>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}>
            <div className="book-shelf-changer">
              <select onChange={(event) => props.onChangeShelf(event, book) }>
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
  );
};

ListBook.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired, 
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBook;