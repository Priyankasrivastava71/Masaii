import Component4 from "./Component4";
import { AppContext } from "./AppContext";
import { useContext } from "react";
function Component3() {
  const { a, b } = useContext(AppContext);

  return (
    <div>
      <h4>Component3</h4>
      <h4>this is prop a value: {a}</h4>
      <h4>this is prop b value: {b}</h4>
      <Component4 />
    </div>
  );
}
export default Component3;
