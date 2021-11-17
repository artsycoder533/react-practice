import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import { books } from './Books';
import Book from './Book';
import { greeting } from './Testing/testing';





function Booklist() {
  console.log(greeting);
  return (
		<section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
		</section>
	);
}

ReactDom.render(<Booklist />, document.getElementById("root"));

