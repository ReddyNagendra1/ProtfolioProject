import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path="/resume" Component={Resume} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />

        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App
