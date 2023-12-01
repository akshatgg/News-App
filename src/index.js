// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import News from './Component/News';

let apikey = process.env.REACT_APP_API_KEY;

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="au"
          element={
            <News key="general" apikey={apikey} pagesize={6} country="au" categories="general" />
          }
        >
          <Route path="health" element={<News key="health" apikey={apikey} pagesize={6} categories="health" country="au" />} />
          
       
       
       
       
        </Route>
      </Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>{router}</React.StrictMode>);
