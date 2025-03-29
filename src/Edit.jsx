import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Edit(){
    let [edit,setedit]=useState({name:"",email:""})
    function change(e){
        setedit({...edit,[e.target.name]:e.target.value})
    }
    const {id}=useParams()
    useEffect(()=>{
        axios.get("http://localhost:1212/user/"+id).then((res=>setedit(res.data)))
    },[])
    let navigate=useNavigate()
    function update(e){
        e.preventDefault();
        axios.put("http://localhost:1212/user/"+id,edit).then(res=>navigate("/Crud/"))
    }
    return(
       <>
        <h1>This is edit component</h1>
        <form>
            <input 
            type="text"
            placeholder="name"
            name="name"
            value={edit.name}
            onChange={change}

            />
            <br/><br/>
             <input 
            type="email"
            placeholder="email"
            name="email"
            value={edit.email}
            onChange={change}

            />
            <br/><br/>
            <button onClick={update}>Edit</button>
        </form>
        </>
        
    )
}