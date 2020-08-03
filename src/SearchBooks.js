import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';

class SearchBooks extends Component {

  state = { 
    query: '',
    searchedBooks: [],
  }

  handleSearchBook = (event) => {

    //console.log(event.target.value);

    const query = event.target.value;

    this.setState({ query: query })

    if (query === '') {
        this.setState({ searchedBooks: [] })
        return;
    }

    BooksAPI.search(query)
      .then(result => {
        if (!result || result.error) {
          this.setState({ searchedBooks: [] });
        } else {

          const searchedBooks = result.map((r) => {
            this.props.books.forEach(book => {
                if (book.id === r.id)
                  r.shelf = book.shelf

                if(!r.shelf)
                  r.shelf = "none"
              })
            return r;
          })

          this.setState({ searchedBooks: searchedBooks });

          //console.log(searchedBooks);
          //console.log(result);
        }
      });
  }

  render() {

    const { query, searchedBooks } = this.state;
    const { shelfOptions, onHandleChangeSelf } = this.props;

    // console.log(searchedBooks);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search' >Close</Link>
          <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.handleSearchBook } />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <ListBooks books={ searchedBooks }
              shelf="read"
              shelfOptions={ shelfOptions }
              onHandleChangeSelf={ onHandleChangeSelf } />
          </ol>
        </div>
    </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onHandleChangeSelf: PropTypes.func.isRequired,
  shelfOptions: PropTypes.object.isRequired,
};

export default SearchBooks;