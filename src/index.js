// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import News from './Component/News';
import FrontPage from './Component/FrontPage';

let apikey = process.env.REACT_APP_API_KEY;

const router = (
  <Router>
    <Routes>
      <Route path="" element={<App />}>
      
      {/* Australia router setup */}
    
      <Route 
          path="" 
          element={<FrontPage/>}
          />

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

       {/* Argentina router setup */}

       <Route 
          path="ae/" 
           element={<News key="ae/general" apikey={apikey} pagesize={6} categories="general" country="ae" />} />

          <Route 
          path="/ae/health" 
          element={<News key="ae/health" apikey={apikey} pagesize={6} categories="health" country="ae" />} 
          />
           <Route 
          path="ae/science" 
          element={<News key="ae/science" apikey={apikey} pagesize={6} categories="science" country="ae" />} 
          />
           <Route 
          path="ae/technology" 
          element={<News key="ae/tech" apikey={apikey} pagesize={6} categories="technology" country="ae" />} 
          />
           <Route 
          path="ae/sports" 
           element={<News key="ae/sports" apikey={apikey} pagesize={6} categories="sports" country="ae" />} />

      {/* India router setup */}

      <Route 
          path="in/" 
           element={<News key="in/general" apikey={apikey} pagesize={6} categories="general" country="in" />} />

          <Route 
          path="/in/health" 
          element={<News key="in/health" apikey={apikey} pagesize={6} categories="health" country="in" />} 
          />
           <Route 
          path="in/science" 
          element={<News key="in/science" apikey={apikey} pagesize={6} categories="science" country="in" />} 
          />
           <Route 
          path="in/technology" 
          element={<News key="in/tech" apikey={apikey} pagesize={6} categories="technology" country="in" />} 
          />
           <Route 
          path="in/sports" 
           element={<News key="in/sports" apikey={apikey} pagesize={6} categories="sports" country="in" />} />

          {/* Bulgaria router setup */}
           
          <Route 
          path="bg/" 
           element={<News key="bg/general" apikey={apikey} pagesize={6} categories="general" country="bg" />} />

          <Route 
          path="/bg/health" 
          element={<News key="bg/health" apikey={apikey} pagesize={6} categories="health" country="bg" />} 
          />
           <Route 
          path="bg/science" 
          element={<News key="bg/science" apikey={apikey} pagesize={6} categories="science" country="bg" />} 
          />
           <Route 
          path="bg/technology" 
          element={<News key="bg/tech" apikey={apikey} pagesize={6} categories="technology" country="bg" />} 
          />
           <Route 
          path="bg/sports" 
           element={<News key="bg/sports" apikey={apikey} pagesize={6} categories="sports" country="bg" />} />





        </Route>
    </Routes>
  </Router>
);                             

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>{router}</React.StrictMode>);
