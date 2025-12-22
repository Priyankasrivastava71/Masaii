import Component5 from "./Component5";

function Component4({c,d,e,f}){



return(
    <div>
        <h4>Component4</h4>
        <h4>this is prop c value: {c}</h4>
         <h4>this is prop d value: {d}</h4>
         <Component5 f={f} e={e} />

    </div>
)
}
export default Component4;