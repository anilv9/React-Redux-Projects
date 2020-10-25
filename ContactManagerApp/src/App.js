import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contact name="John Doe" email="jdoe@gmail.com" phone="987-354-7463"/>
      <Contact name="Anil vem" email="anil@gmail.com" phone="987-222-7463"/>
    </div>
  );
}

export default App;
