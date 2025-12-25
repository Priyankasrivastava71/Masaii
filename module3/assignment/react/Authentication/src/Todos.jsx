import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Todos(){

    const [todos,setTodos]=useState([])
    const navigate = useNavigate();

    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos")
     .then((res)=>res.json())
     .then((data)=> setTodos(data));

    },[]);
    
    const handleLogout=()=>{
    localStorage.removeItem("isLoggedIn");
    navigate("/login")
    };

    return(
        <div style={{padding:"20px"}}>
        <h1>Todos</h1>
        <button onClick={handleLogout}>Logout</button>

        <ul>
            {todos.map((todo)=>(
               <li key={todo.id}>
                <Link to= {`/todo/${todo.id}`}>{todo.title}</Link>
               </li> 
            ))};
        </ul>
        </div>
    );
};
export default Todos;