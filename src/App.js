import React from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import About from './components/About'
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressBar from 'react-progressbar-on-scroll'

function App() {

  return (
    <>
      <Header />
      <ProgressBar
        color='#436206'
      />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App