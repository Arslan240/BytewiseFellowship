import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import AddUser from './Components/AddUser'
import Footer from './Components/Footer'
import Users from './Components/Users'

function App() {

  return <div>
    <Header />
    <AddUser />
    <Users/>
    <Footer />
  </div>
}

export default App
