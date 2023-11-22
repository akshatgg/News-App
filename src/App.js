

import React from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

let apikey=process.env.REACT_APIs_KEY
// let apikey=""
function App() {
  return (
    <div>
      <NavBar/>
      <News apikey={apikey} pagesize={5}/>
    </div>
  )
}

export default App
