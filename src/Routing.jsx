import React from "react";
import Add from './Add.jsx';
import App from './App.jsx'
import Edit from './Edit.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";

 
export default function Routing(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/Crud/" element={<App/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}