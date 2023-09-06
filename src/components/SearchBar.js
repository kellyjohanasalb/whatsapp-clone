// SearchBar.js
import React, { useState } from 'react';

export  function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} className="input" />
      <button onClick={() => onSearch(query)} className="button">Buscar</button>
    </div>
  );
}
