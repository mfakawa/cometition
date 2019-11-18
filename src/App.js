import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import AboutMe from './components/Body/AboutMe';
import Experience from './components/Body/Experience';
import Passion from './components/Body/Passion';


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <AboutMe />
        <Experience />
        <Passion />
        <Footer />
      </>
    </BrowserRouter>
  )
}


export default App;
