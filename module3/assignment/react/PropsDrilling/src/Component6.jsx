import { useContext } from "react";
import {AppContext} from "./AppContext";

function Component6(){

const {e} = useContext(AppContext)

return(
    <div>
        <h4>Component6</h4>
<h4>this is prop e value: {e}</h4>

    </div>

)
}
export default Component6;