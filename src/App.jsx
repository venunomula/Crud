import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [state, setState] = useState([]);
  const [head, sethead] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:1212/user").then((res) => {
      setState(res.data);
      sethead(Object.keys(res.data[0]));
    });
  }, []);
  const navigate=useNavigate()
 
  function del(id){
  
    axios.delete("http://localhost:1212/user/"+id).then(navigate("/Crud/"))
  }
  

  return (
    <>
    
    <h1> CRUD Operation</h1>
    <button id='add'><Link to="/add" id='link'>Add+</Link></button>
    
      <table border="1">
        <thead>
          <tr>
          {head.slice(0,4).map((x,y) => (
            <th key={y}>{x}</th>
            
          ))}
          <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {state.map((y) => (
            <tr key={y.id}>
              <td>{y.id}</td>
              <td>{y.name}</td>
              <td>{y.username}</td>
              <td>{y.email}</td>
              <td>&nbsp;
              <Link to={`/edit/${y.id}`}>
              <button>Edit</button></Link>&nbsp;
              <button onClick={()=>{
                del(y.id)

              }}>Delete</button>&nbsp;</td>
              
            </tr>
          ))}
          
        </tbody>
      </table>
    </>
  );
}

