
import {Navigate} from "react-router-dom";
const ProtectRoute=({children})=>{
const isLoggeIn= localStorage.getItem("isLogIn" )==="true";
if(!isLoggeIn){
   return <Navigate to="/login"/>

   }
return children;

}

export default ProtectRoute;