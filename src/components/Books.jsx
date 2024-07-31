import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import Book from './Book';
import '../css/book.css';

const Books = () => {
  const initialBooks = [
    { title: 'Florante at Laura', author: 'Mike', dueDate: '2024-08-01', status: 'Checked Out' },
    { title: 'El Filibusterismo', author: 'Jhon', dueDate: '2024-08-05', status: 'Checked Out' },
    { title: 'The Enchanted', author: 'Jane', dueDate: '2024-08-10', status: 'Checked Out' },
    { title: 'Viva Max', author: 'Lisa', dueDate: '2024-08-15', status: 'Checked Out' },
    { title: 'Lola Basyang', author: 'Jeff', dueDate: '2024-08-20', status: 'Checked Out' },
    { title: 'The Unknown', author: 'Jake', dueDate: '2024-28-25', status: 'Checked Out' },
    { title: 'Ang Probinsyano', author: 'Juan',dueDate: '2024-18-25',  status: 'Available' },
    { title: 'Ang Panday', author: 'Taña',dueDate: '2024-09-25',  status: 'Available' },
    { title: 'The Last Suffer', author: 'Novabos',dueDate: '2024-07-25',  status: 'Available' },
    { title: 'John Wick', author: 'Guinita',dueDate: '2024-06-25',  status: 'Available' },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const toggleStatus = (index) => {
    const newBooks = [...filteredBooks];
    const originalIndex = books.indexOf(newBooks[index]);
    newBooks[index].status =
      newBooks[index].status === 'Available' ? 'Checked Out' : 'Available';
    setFilteredBooks(newBooks);
    const updatedBooks = [...books];
    updatedBooks[originalIndex] = newBooks[index];
    setBooks(updatedBooks);
  };

  return (
    <div className="books-container">
      <h1 className="books-title">Books List</h1>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <br />
      <ul className="books-list">
        <li className="books-header">
          <span className="book-index">No.</span>
          <span className="book-title">Title</span>
          <span className="book-author">Author</span>
          <span className="book-due-date">Due Date</span><br />
          <span className="book-status">Status</span>
          <span className="book-action">Action</span>
        </li>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} index={index} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
