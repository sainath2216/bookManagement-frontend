# Book Management Application

### Set Up Instructions

<details>
<summary>Click to view</summary>
  
- npm create vite@latest
- project name: frontend
- select framework: React
- select varientL: javascript
- cd frontend
- Download dependencies by running `npm install`
- Start up the app using `npm run dev`
  
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities
### 1. Home Page:
- include a navigation bar with links: Home, Contact, About, and Add Book.
- Provide a search section with filters (e.g., genres, authors) and a search button.

### 2. Search Results Page:
- Display books in a grid or list format with pagination.
- Include options to view details, edit, or delete a book record.

### 3. Details Page:
- Display detailed information about a selected book, including:
  + Title
  + Author
  + Genre
  + Pages
  + Published Date

### 4. Book Management Pages:
  - Provide forms for adding and editing book details with appropriate input validations.
  - Include a confirmation step for book deletion.

</details>

<details>
<summary> Database Schema:</summary>
<br/>
  
  ### 1. Books Table:
  - Fields:
    + BookID (Primary Key)
    + Title
    + AuthorID (Foreign Key)
    + GenreID (Foreign Key)
    + Pages
    + PublishedDate
### 2. Genres Table:
- Fields:
 + GenreID (Primary Key)
 + Name
 + Description

### 3.Authors Table:

- Fields:
  + AuthorID (Primary Key)
  + Name

</details>

<details>
<summary>Development Plan</summary>
  
<br/>

### 1. frontend

- Use a modern JavaScript framework like React.js.
- Develop components for:
   + Home
   + Search Results
   + Book Details
   + Add/Edit Book
   + Delete Book
- Integrate Fetch API for data communication with the backend.

### 2. Backend:

- Develop RESTful API endpoints using Node.js with Express.js:
   + GET /books: Fetch all books.
   + POST /books: Add a new book.
   + PUT /books/:id: Update an existing book.
   + DELETE /books/:id: Delete a book.

### 3. Database:

- Use a relational database like SQLite for data storage.

</details>

 
 <details> 
<summary>Testing Strategy</summary>
<br/>
  
### 1. Frontend Unit Testing:
  + Use Jest (for React) or Mocha/Chai.
    
### 2. Backend Unit Testing:
  + Implement test cases using Mocha or Jest.
    
### 3. Manual Testing:
  + Verify CRUD operations and UI functionality.

</details>

 <details> 
<summary>Guidelines</summary>

<br/>

- Submit the complete source code (frontend, backend, and database scripts).
- Include instructions for setting up and running the application.
- Attach screenshots of the UI and testing results.

  </details>

<details>
<summary>Implementation Files</summary>
<br/>
  
- src/components/Home.jsx
- src/components/Navbar.jsx
- src/components/BookList.jsx
- src/components/BookDeatils.jsx
- src/components/AddEditBook.jsx
- src/components/About.jsx
- src/app.jsx
- src/index.css  
</details>



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
