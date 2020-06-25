import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import boot strap for css use
import 'bootstrap/dist/css/bootstrap.min.css';
//importing the router as BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
