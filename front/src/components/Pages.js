import { Route, Routes } from "react-router";
import BookList from "./Books/BookList";
import Navbar from "./Navbar"
import HomePage from "./HomePage";
import React from 'react';
import CreateBook from "./Books/CreateBook";

const Pages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/createbook" element={<CreateBook />} />
            </Routes>
        </>
    )
}

export default Pages;