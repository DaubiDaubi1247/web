import React from 'react';

import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {NavPath} from "./common/navPath/NavPath";
import MonsterClassContainer from "./component/monsterClass/MonsterClassContainer";
import MonsterByClassInfoContainer from "./component/MonsterByClassInfo/MonsterByClassInfoContainer";
import MonsterInfoContainer from "./component/monsterInfo/MonsterInfoContainer";
import CreateMonsterForm from "./component/authForm/CreateMonsterForm";

function App() {
  return (
    <div className="App wrapper ">
        <Header/>
        <div className="content">
            <Routes>
                <Route path={NavPath.HOME} element={<MonsterClassContainer />} />
                <Route path={NavPath.MONSTERS_BY_CLASS + ":id"} element={<MonsterByClassInfoContainer/>}/>
                <Route path={NavPath.MONSTERS_BY_CLASS + ":id/monsterId/:id"} element={<MonsterInfoContainer/>}/>
                <Route path={NavPath.CREATE_MONSTER_CLASS} element={<CreateMonsterForm/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
