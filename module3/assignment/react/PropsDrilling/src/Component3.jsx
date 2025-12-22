import Component4 from "./Component4";

function Component3({a,b,c,d,e,f}){



return(
    <div>
        <h4>Component3</h4>
        <h4>this is prop a value: {a}</h4>
        <h4>this is prop b value: {b}</h4>
         <Component4 c={c} d={d} e={e} f={f}/>

    </div>

)
}
export default Component3;