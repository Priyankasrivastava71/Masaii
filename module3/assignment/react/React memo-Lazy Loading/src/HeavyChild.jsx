import React from "react";

function HeavyChild(){
  console.log("HeavyChild rendered");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Heavy Child Component</h3>
      <p>This component is heavy and memoized.</p>
    </div>
  );
}


export default React.memo(HeavyChild);