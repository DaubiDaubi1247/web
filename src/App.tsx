import React from 'react';

import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App wrapper ">
        <Header/>
        <div className="content"></div>
        <Footer/>
    </div>
  );
}

export default App;
