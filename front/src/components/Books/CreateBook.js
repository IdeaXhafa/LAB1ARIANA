import React, { useState } from 'react';
import axios from 'axios';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBook = {
      Title: title,
      Author: author,
      Timestamp: timestamp
    };

    try {
      const response = await axios.post('http://localhost:5267/api/book', newBook);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <label>
        Timestamp:
        <input type="datetime" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateBook;
