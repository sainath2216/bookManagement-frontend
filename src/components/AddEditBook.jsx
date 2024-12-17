import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEditBook = () => {
  const [book, setBook] = useState({
    Title: "",
    AuthorID: "",
    GenreID: "",
    Pages: "",
    PublishedDate: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://book-management-1szm.onrender.com/api/books/${id}`)
        .then((response) => response.json())
        .then((data) => setBook(data))
        .catch((error) => console.error("Error fetching book data:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!book.Title || !book.AuthorID || !book.GenreID || !book.Pages || !book.PublishedDate) {
      alert("Please fill in all the fields!");
      return;
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `https://book-management-1szm.onrender.com/api/books/${id}`
      : "https://book-management-1szm.onrender.com/api/books";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: book.Title,
        authorID: book.AuthorID,
        genreID: book.GenreID,
        pages: book.Pages,
        publishedDate: book.PublishedDate,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save the book');
        }
        return response.json();
      })
      .then(() => {
        navigate("/books");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error saving book");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <label>Title:</label>
      <input
        type="text"
        name="Title"
        value={book.Title}
        onChange={handleChange}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        name="AuthorID"
        value={book.AuthorID}
        onChange={handleChange}
        required
      />

      <label>Genre:</label>
      <input
        type="text"
        name="GenreID"
        value={book.GenreID}
        onChange={handleChange}
        required
      />

      <label>Pages:</label>
      <input
        type="number"
        name="Pages"
        value={book.Pages}
        onChange={handleChange}
        required
      />

      <label>Published Date:</label>
      <input
        type="date"
        name="PublishedDate"
        value={book.PublishedDate}
        onChange={handleChange}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default AddEditBook;
