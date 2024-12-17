// 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch(`https://book-management-1szm.onrender.com/api/books/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setBook(data))
        .catch((error) => {
          console.error("Error fetching book details:", error);
          setError(true);
        });
    }, [id]);
  
    if (error) return <p>Failed to load book details. Please try again later.</p>;
    if (!book) return <p>Loading...</p>;
  
    return (
      <div className="book-details">
        <h2>{book.Title}</h2>
        <p>
          <strong>Author:</strong> {book.AuthorID}
        </p>
        <p>
          <strong>Genre:</strong> {book.GenreID}
        </p>
        <p>
          <strong>Pages:</strong> {book.Pages}
        </p>
        <p>
          <strong>Published Date:</strong> {book.PublishedDate}
        </p>
      </div>
    ); 
  };
  
  export default BookDetails;
  