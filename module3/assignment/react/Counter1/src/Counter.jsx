import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      setMessage("The number " + count + " is divisible by 3");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Counter;