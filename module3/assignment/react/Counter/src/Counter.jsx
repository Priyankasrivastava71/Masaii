import React,{useState} from "react"

function Counter(){
 const[count,setCount]=useState(0)
 const increment=()=>{
    setCount(count+1)
 }
    return(
     <> 
       <h3> {count} </h3>
       <button onClick={increment}>Increment</button>
     </>
    )

}
export default Counter;