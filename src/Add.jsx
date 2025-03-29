import React from "react";
import {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
export default function Add(){
    let [values,setvalues]=useState({"id":"","name":"","username":"","email":""})
    let change=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]});
    }
    const navigate=useNavigate()
    // let navigate=useNavigate()
    function sendusers(){
        axios.post("http://localhost:1212/user",values).then(navigate("/Crud/"))
    }
    
    
    return(
        <>
        <h1>Add items</h1>
        <form action="">
        <input
              type="number"
              placeholder="Enter your id"
              name="id"
              value={values.id}
              onChange={change}
            />
            <br></br><br/>
        <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onChange={change}
            />
            <br></br><br/>
            <input
              type="text"
              placeholder="Enter user name"
              name="username"
              value={values.username}
              onChange={change}
            />
            <br></br><br/>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={change}
              
            />
            <br/><br/>
            <button onClick={sendusers}>Add</button>
            

        </form>
        </>
    )
}