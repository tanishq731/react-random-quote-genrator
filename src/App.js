import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="quote">
        <p>"{quote}"</p>
        <h4>- {author}</h4>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;
