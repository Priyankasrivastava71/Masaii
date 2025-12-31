import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, Suspense, lazy } from "react";


const HeavyChild = lazy(() => import("./HeavyChild"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <hr />

      {/* Suspense is required for lazy loading */}
      <Suspense fallback={<h4>Loading Heavy Component...</h4>}>
        <HeavyChild />
      </Suspense>
    </div>
  );
}

export default App;