import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [isRed, setIsRed] = useState(true);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        This is a div
      </div>

      <button onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
}

export default App;
