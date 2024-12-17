import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    // Fetch all books from the backend
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            fetchBooks(); // Refresh the book list
          } else {
            console.error("Failed to delete the book.");
          }
        })
        .catch((error) => console.error("Error deleting book:", error));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`); // Navigate to the edit page
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.BookID} className="book-item">
              <Link to={`/books/${book.BookID}`}>{book.Title}</Link>
              <div className="book-actions">
                <button onClick={() => handleEdit(book.BookID)}>Edit</button>
                <button onClick={() => handleDelete(book.BookID)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
