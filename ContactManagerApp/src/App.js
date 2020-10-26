import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
      <Contact name="John Doe" email="jdoe@gmail.com" phone="987-354-7463"/>
      <Contact name="Anil vem" email="anil@gmail.com" phone="987-222-7463"/>
      </div>
    </div>
  );
}

export default App;
