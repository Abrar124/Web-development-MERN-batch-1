import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}


function Home() {
  return (
    <div>
      <h1>Hello home page</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>Hello About page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Hello Contact page</h1>
    </div>
  )
}

export default App