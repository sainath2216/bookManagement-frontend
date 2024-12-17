import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5; // Number of books per page

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);


  useEffect(() => {
    setFilteredBooks(
      books.filter((book) =>
        book.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="home-container">
      <div className="main-heading">
        <h1>Welcome to the Book Management System</h1>
        <p className="description">
          Search, view, and manage your book records efficiently.
        </p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a book by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      
      <div className="book-list-container">
        {currentBooks.length > 0 ? (
          <ul className="book-list">
            {currentBooks.map((book) => (
              <li key={book.BookID} className="book-item">
                <Link to={`/books/${book.BookID}`}>
                  <h3 className="title">Title: {book.Title}</h3>
                  <p>Author: {book.AuthorID}</p>
                  <p>Genre: {book.GenreID}</p>
                  <p>Pages: {book.Pages}</p>
                  <p>Published Date: {book.PublishedDate}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div  className="not-found">
            <p>No books found.</p>
          </div>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
