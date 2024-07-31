import React from 'react';

const Book = ({ book, index, toggleStatus }) => (
  <li className="book-item">
    <span className="book-index">{index + 1}</span>
    <span className="book-title">{book.title}</span>
    <span className="book-author">{book.author}</span>
    <span className="book-due-date">{book.status === 'Checked Out' ? book.dueDate : 'N/A'}</span>
    <span className="book-status">{book.status}</span>
    <button className="toggle-button" onClick={() => toggleStatus(index)}>Toggle Status</button>
  </li>
);

export default Book;
