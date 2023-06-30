import React from 'react'
import Header from './Components/Header'

import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/service" element={<Services />}>Services</Route>
        <Route path="/team" element={<Team />}>Team</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App