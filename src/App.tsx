import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RedirectingBtns from './components/RedirectingBtns';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <RedirectingBtns />
      <Footer />
    </>
  );
}

export default App;
