import React from 'react';

import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {HeaderNavPath} from "./common/navPath/header/HeaderNavPath";
import MonsterCardContainer from "./common/monsterCard/MonsterCardContainer";

function App() {
  return (
    <div className="App wrapper ">
        <Header/>
        <Routes>
            <Route path={HeaderNavPath.HOME} element={<MonsterCardContainer />} />

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
