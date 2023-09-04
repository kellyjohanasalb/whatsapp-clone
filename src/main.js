import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';


const root = document.querySelector('#root');
createRoot(root).render(<App />)