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
      
      {/* Australia router setup */}
      
           <Route 
          path="au/" 
           element={<News key="au/general" apikey={apikey} pagesize={6} categories="general" country="au" />} />

          <Route 
          path="/au/health" 
          element={<News key="au/health" apikey={apikey} pagesize={6} categories="health" country="au" />} 
          />
           <Route 
          path="au/science" 
          element={<News key="au/science" apikey={apikey} pagesize={6} categories="science" country="au" />} 
          />
           <Route 
          path="au/technology" 
          element={<News key="au/tech" apikey={apikey} pagesize={6} categories="technology" country="au" />} 
          />
           <Route 
          path="au/sports" 
           element={<News key="au/sports" apikey={apikey} pagesize={6} categories="sports" country="au" />} />


      {/* Austria router setup */}

      <Route 
          path="at/" 
           element={<News key="at/general" apikey={apikey} pagesize={6} categories="general" country="at" />} />

          <Route 
          path="/at/health" 
          element={<News key="at/health" apikey={apikey} pagesize={6} categories="health" country="at" />} 
          />
           <Route 
          path="at/science" 
          element={<News key="at/science" apikey={apikey} pagesize={6} categories="science" country="at" />} 
          />
           <Route 
          path="at/technology" 
          element={<News key="at/tech" apikey={apikey} pagesize={6} categories="technology" country="at" />} 
          />
           <Route 
          path="at/sports" 
           element={<News key="at/sports" apikey={apikey} pagesize={6} categories="sports" country="at" />} />










        </Route>
    </Routes>
  </Router>
);                             

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>{router}</React.StrictMode>);
