import Component3 from "./Component3";

function Component2(props){



return(
    <div>
        <h4>Component2</h4>
        <Component3 {...props}/>
    </div>

)
}
export default Component2;