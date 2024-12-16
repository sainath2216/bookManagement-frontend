import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Book Management System</h1>
      <p>
        The Book Management System is a comprehensive application designed to
        streamline the management of books in a library or personal collection.
        It allows users to efficiently create, read, update, and delete book
        records while also offering detailed book information.
      </p>
      <h2>Features</h2>
      <ul>
        <li>View a list of all available books.</li>
        <li>Search books by title, author, or genre.</li>
        <li>Add new books to the collection with all relevant details.</li>
        <li>Edit existing book records to keep data up-to-date.</li>
        <li>Delete books that are no longer part of the collection.</li>
        <li>View detailed information for individual books.</li>
      </ul>
      <h2>Why Use This Application?</h2>
      <p>
        This system is designed to simplify book management for libraries,
        schools, or personal enthusiasts. It ensures accurate record-keeping
        and provides an intuitive user interface for easy access to book
        information.
      </p>
      <h2>Future Enhancements</h2>
      <p>We plan to add more features, including:</p>
      <ul>
        <li>User authentication and role-based access control.</li>
        <li>Advanced filtering and sorting options.</li>
        <li>Integration with external APIs for book data.</li>
      </ul>
    </div>
  );
};



export default About;
