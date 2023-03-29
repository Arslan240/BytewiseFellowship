import React from 'react'
import './App.css'

function App() {
  // using JSX
  // return (
  //     <div className="container">
  //       <h1>Hello JSX</h1>
  //     </div>
  //   );
  
  // using Javascript methods to create elements
  return React.createElement(
    'div',
    {className: "container"},
    React.createElement('h1', {id: "container-title"},"Hello Create Element")
  )
}

export default App
