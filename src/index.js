// Application entrypoint.

// Load up the application styles
require("../styles/main.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('react-root'));