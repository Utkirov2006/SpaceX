import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Card/>
      <Footer/>
    </>
  );
};

export default App;