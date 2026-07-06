import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles/style.css';
import './styles/animation.css';

// Note: intentionally NOT wrapped in <React.StrictMode> so the DOM-driven
// effects in script.js (particle rAF loops, cursor loop, listeners) run
// exactly once, matching the original vanilla behavior.
createRoot(document.getElementById('root')).render(<App />);
