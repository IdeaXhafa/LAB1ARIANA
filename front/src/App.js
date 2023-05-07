import logo from './logo.svg';
import './App.css';
import Pages from './components/Pages'
import BookList from './components/Books/BookList';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <Pages/> */}
      <BookList/>
    </div>
  );
}

export default App;
