import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={toggleStatus}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;