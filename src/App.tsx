import React from 'react';

import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {HeaderNavPath} from "./common/navPath/header/HeaderNavPath";
import MonsterCardContainer from "./common/monsterCard/MonsterCardContainer";
import MonsterClassContainer from "./component/monsterClass/MonsterClassContainer";
import MonsterByClassInfoContainer from "./component/MonsterByClassInfo/MonsterByClassInfoContainer";
import MonsterInfo from "./component/monsterInfo/MonsterInfo";
import CreateMonsterForm from "./component/authForm/CreateMonsterForm";

function App() {
  return (
    <div className="App wrapper ">
        <Header/>
        <CreateMonsterForm/>
        <Routes>
            <Route path={HeaderNavPath.HOME} element={<MonsterClassContainer />} />
            <Route path={HeaderNavPath.MONSTERS_BY_CLASS + ":id"} element={<MonsterByClassInfoContainer/>}/>
            <Route path={HeaderNavPath.MONSTERS_BY_CLASS + ":id/monsterId/:id"} element={<MonsterInfo/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
