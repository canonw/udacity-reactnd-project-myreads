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
    // const newShelf = event.target.value;
    // const currShelf = book.shelf;
    // const bookId = book.id;
    // // console.log(`${newShelf} ${currShelf} ${bookId}`);

    // let currBookShelf = shelves[currShelf];
    // let newBookShelf = shelves[newShelf];
    // let bookToUpdate;

    // bookToUpdate = currBookShelf.find((book) => book.id === bookId);
    // currBookShelf = currBookShelf.filter((book) => book.id !== bookId);

    // TODO: Handle none shelf
    // bookToUpdate.shelf = newShelf;
    // newBookShelf.push(bookToUpdate);

    // console.log(this.state);
//    this.setState({ shelves : shelves });
    // ContactsAPI.create(contact).then(contact => {
    //   this.setState(state => ({
    //     contacts: state.contacts.concat([ contact ])
    //   }))
    // })
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books: books }));

    // if (!Array.isArray(this.state.books)) {
    //   BooksAPI.getAll()
    //     .then((books) => {

    //       let shelves = books.reduce((r, a) => {
    //         r[a.shelf] = [...r[a.shelf] || [], a];
    //         return r;
    //       }, {});

    //       this.setState({ books: books, shelves: shelves });
    //   });
    // }
  }

  render() {

    const { books } = this.state;

    // console.log("1");
    // console.log(books);
    return (
      <ListBookShelves books={ books } onHandleChangeSelf={ this.handleChangeSelf }/>
    );
  }
}

export default BooksApp
