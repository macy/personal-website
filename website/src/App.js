import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Header />
        <main>
          <Home />
          <About />
          <Experience />
          <Travel />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
