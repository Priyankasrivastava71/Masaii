import Component1 from "./Component1";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <Component1 />
    </AppContextProvider>
  );
}
export default App;
