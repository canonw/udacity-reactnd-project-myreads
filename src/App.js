import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelves from './ListBookShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  handleChangeSelf = (book, shelf) => {
    // console.log(book);
    // console.log(shelf);
    // console.log(this.state);
    BooksAPI.update(book, shelf)
      .then(() => {
        let newBook = book;
        newBook.shelf = shelf;
        this.setState((state) => ({ books: state.books.filter(f => f.id !== book.id).concat(newBook) }))
      })
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books: books }));
  }

  render() {

    const { books } = this.state;

    return (
      <Router>
        <div className="app">

          <Route exact path='/' render={() => (
            <ListBookShelves
              books={ books }
              onHandleChangeSelf={ this.handleChangeSelf }/>
            )} />

          <Route exact path='/search' render={() => (
            <SearchBooks />
            )} />

        </div>
      </Router>
    );
  }
}

export default BooksApp
