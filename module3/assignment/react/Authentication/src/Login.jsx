import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail]=useState("")
const [password, setPassword]=useState("")
const [error,setError]=useState("")

const navigate=useNavigate()

const loginUser=()=>{

localStorage.setItem("login",true)

navigate("/Todos")

if(email=== "admin@gmail.com" && password === "admin@123"){
 localStorage.setItem("isLogIn","true")
 navigate("/todos")

}else{
setError("Invalid email or password")
    
}

}
    return(
    <div style={{padding:"20px"}}>
    <input type="email" value={email} placeholder="enter email here" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" value={password} placeholder="enter password here" onChange={(e)=>setPassword(e.target.value)}/>
      
    <button onClick={loginUser}>login</button>

    {error && <p style={{color:"red"}}>{error}</p>}
    </div>
    )   
}
export default Login;