import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddEditBook from './components/AddEditBook';
import Navbar from './components/Navbar';
import About from './components/About';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/books/:id" element={<BookDetails />} />
                <Route path="/add-book" element={<AddEditBook />} />
                <Route path="/edit-book/:id" element={<AddEditBook />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;