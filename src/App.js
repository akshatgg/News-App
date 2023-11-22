

import React from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

// const apikey=process.env.REACT_API_KEY;
// console.log(apikey)
let apikey=""
function App() {
  return (
    <div>
      <NavBar/>
      <News apikey={apikey} pagesize={5}/>
    </div>
  )
}

export default App
