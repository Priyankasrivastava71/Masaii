import Component6 from "./Component6";

function Component5({f,e}){



return(
    <div>
        <h4>Component5</h4>
        <h4>this is prop f value: {f}</h4>
        
         <Component6 e={e}/>

    </div>
)
}
export default Component5;