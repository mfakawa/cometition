import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import MainBody from './components/MainBody/mainBody';
import Footer from './components/Footer/footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <MainBody />
          <Footer />
        </>
      </BrowserRouter>
    )
  }
}
export default App;
