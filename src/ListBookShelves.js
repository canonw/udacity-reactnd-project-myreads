import React from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks'

const shelfOptions = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
  none: "None"
};

const ListBookShelves = props => {

  const { books, onHandleChangeSelf } = props;

  // console.log("Pre");
  // console.log(books);
  //let shelves = {};
  
  
  // //if(Array.isArray(books) && books.length) {
  // shelves = books.reduce((r, a) => {
  //   r[a.shelf] = [...r[a.shelf] || [], a];
  //   return r;
  // }, {});
  // //}

  // console.log("shelves");
  // console.log(shelves);

  // this.state.dataGoal.milestones && Object.keys(this.state.dataGoal.milestones)
  // console.log("goo");
  // if(shelves)
  //   console.log(Object.values(shelves["goo"]));

  // console.log("currentlyReading");
  // if(shelves)
  //   console.log(Object.values(shelves["currentlyReading"]));

  // Object.entries(shelves)
  //   .map(([key,value]) => <ListBookShelves key={key}
  //     onChangeShelf={this.changeShelf}
  //     books={value}
  //     shelf={key}
  //     shelves={shelves}
  //     shelfOptions={shelfOptions} />)

  // // shelves[key].map((book) => <ListBook key={ book.id }
  // // book={ book }
  // // shelf={ key }
  // // shelfOptions={ shelfOptions } />)

  return (
    <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["currentlyReading"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "currentlyReading")}
                shelf="currentlyReading" shelfOptions={ shelfOptions } onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["wantToRead"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "wantToRead")}
                shelf="wantToRead" shelfOptions={ shelfOptions } onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelfOptions["read"] }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBooks books={ books.filter(b => b.shelf === "read")}
                shelf="read" shelfOptions={ shelfOptions } onHandleChangeSelf={ onHandleChangeSelf }/>
            </ol>
          </div>
        </div>
      </div>

      </div>
    </div>
    </div>

  );
  // {
  //   Object.entries(shelves)
  //     .map(([key,value]) => <p>{key} {value}</p> )
  // }
/*
        // <ListBookShelves books={books} onChangeShelf={this.changeShelf} />

return (
  <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {
          Object.entries(shelves)
            .map(([key,value]) => <ListBookShelves key={key}
              onChangeShelf={this.changeShelf}
              books={value}
              shelf={key}
              shelves={shelves}
              shelfOptions={shelfOptions} />)
        }
      </div>
    </div>
  </div>
);
*/
  // return (
  //   <div>
  //     <div className="bookshelf">
  //       <h2 className="bookshelf-title">{ shelfOptions[shelf] }</h2>
  //       <div className="bookshelf-books">
  //         <ol className="books-grid">
  //         {
  //           books.map((book) => <ListBook key={ book.id }
  //             onChangeShelf={ props.onChangeShelf }
  //             book={ book }
  //             shelf={ shelf }
  //             shelfOptions={ shelfOptions } />)
  //         }
  //         </ol>
  //       </div>
  //     </div>
  //   </div>
  // );
};

ListBookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onHandleChangeSelf: PropTypes.func.isRequired,
  // shelf: PropTypes.string.isRequired,
  // shelfOptions: PropTypes.object.isRequired,
};

export default ListBookShelves;