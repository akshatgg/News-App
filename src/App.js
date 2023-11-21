

import React from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

let apikey=process.env.REACT_APIs_KEY

function App() {
  return (
    <div>
      <NavBar/>
      <News apikey={apikey}/>
    </div>
  )
}

export default App
