import { useContext } from "react";
import Component6 from "./Component6";
import{ AppContext} from "./AppContext";
function Component5() {
  const { f } = useContext(AppContext);

  return (
    <div>
      <h4>Component5</h4>
      <h4>this is prop f value: {f}</h4>

      <Component6 />
    </div>
  );
}
export default Component5;
