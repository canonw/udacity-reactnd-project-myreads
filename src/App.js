import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelf from './ListBookShelf'

const shelfOptions = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
  none: "None"
};

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    
    books: {},

    shelves: {}
  }

  componentDidMount() {
    if (!Array.isArray(this.state.books)) {
      BooksAPI.getAll()
        .then((books) => {

          let shelves = books.reduce((r, a) => {
            r[a.shelf] = [...r[a.shelf] || [], a];
            return r;
          }, {});

          this.setState({ books: books, shelves: shelves });
      });
    }
  }

  render() {

    const { shelves } = this.state;

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              Object.entries(shelves)
                .map(([key,value]) => <ListBookShelf key={key} books={value}
                  shelf={key}
                  shelfOptions={shelfOptions} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp
