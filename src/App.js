import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

const shelfTypes = {
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
    
    books: {}
  }

  componentDidMount() {
    if (!Array.isArray(this.state.books)) {
      BooksAPI.getAll()
        .then((data) => this.setState({ books: data }));
    }
  }

  render() {

    const { books } = this.state;

    let ListTemplate;
    if (Array.isArray(books) && books.length) {
      ListTemplate = books.map((book) =>
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    { Object.entries(shelfTypes).map(([key,value],i) => <option key={i} value={key}>{value}</option>) }
                  </select>
                </div>
              </div>
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{ book.authors.join(', ') }</div>
            <div>{book.shelf}</div>
          </div>
        </li>
      );
    } else {
      ListTemplate = <li>No Book Found </li>;
    }

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading TBD</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  { ListTemplate }
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp
