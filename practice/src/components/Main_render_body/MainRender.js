import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Guru from '../ForGuru/Guru'
import Suraj from '../ForSuraj/Suraj'
import Pravin from '../ForPravin/Pravin'
import Vishal from '../ForVishal/Vishal'
import Arvind from '../ForArvind/Arvind'
import HomePage from '../Home/Home'
const MainRender = () =>{
    return(
        <>
            <Routes>
                <Route path="/Home" element={<HomePage/>}> </Route>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path="/Suraj" element={<Suraj/>}> </Route>
                <Route path="/Arvind" element={<Arvind/>}> </Route>
                <Route path="/Vishal" element={<Vishal/>}> </Route>
                <Route path="/Guru" element={<Guru/>}> </Route>
                <Route path="/Pravin" element={<Pravin/>}> </Route>
            </Routes>
        </>
    )
}
export default MainRender;