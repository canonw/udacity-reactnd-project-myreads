import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelves from './ListBookShelves'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    
    books: [],
  }

  handleChangeSelf(book, shelf) {
    console.log(book);
    console.log(shelf);
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books: books }));
  }

  render() {

    const { books } = this.state;

    return (
      <ListBookShelves books={ books } onHandleChangeSelf={ this.handleChangeSelf }/>
    );
  }
}

export default BooksApp
