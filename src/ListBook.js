import React from 'react';
import PropTypes from 'prop-types';

const ListBook = props => {

  const { book, shelfOptions } = props;

  return (
    <li key={ props.book.id }>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                { Object.entries(shelfOptions).map(([key,value],i) => <option key={i} value={key}>{value}</option>) }
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
  shelfOptions: PropTypes.object.isRequired,
};

export default ListBook;