import { useContext } from "react";
import Component5 from "./Component5";
import {AppContext} from "./AppContext";

function Component4(){
const {c,d}=useContext(AppContext)
return(
    <div>
        <h4>Component4</h4>
        <h4>this is prop c value: {c}</h4>
         <h4>this is prop d value: {d}</h4>
         <Component5 />

    </div>
)
}
export default Component4;