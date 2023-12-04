import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';


function App() {
  // return (
  //   <div>
  //     <Router>
  //       <NavBar />
  //       <Routes>
  //         <Route path='' >
  //           <Route path='Australia' element={<News key="Australia" apikey={apikey} pagesize={6} country="au" />}>
  //         <Route exact path="/sports" element={<News key="sports" apikey={apikey} pagesize={6} categories="sports" />} />
  //         </Route>
  //         <Route exact path="/entertainment" element={<News key="entertainment" apikey={apikey} pagesize={6} categories="entertainment" />} />
  //         <Route exact path="/science" element={<News key="science" apikey={apikey} pagesize={6} categories="science" />} />
  //         <Route exact path="/health" element={<News key="health" apikey={apikey} pagesize={6} categories="health" />} />
  //         <Route exact path="/technology" element={<News key="technology" apikey={apikey} pagesize={6} categories="technology" />} />
  //         <Route exact path="/" element={<News key="gene" apikey={apikey} pagesize={6} categories="general" />} />
  //         </Route>
  //       </Routes>
  //     </Router>
  //   </div>
  // );
  





  return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
