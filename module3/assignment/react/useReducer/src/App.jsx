import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";

import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import ReviewAndSubmit from "./ReviewAndSubmit";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showSuccess, setShowSuccess] = useState(false); 

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Multi Step Registration Form</h2>

      {state.step === 1 && (
        <PersonalDetails state={state} dispatch={dispatch} />
      )}

      {state.step === 2 && (
        <AccountDetails state={state} dispatch={dispatch} />
      )}

      {state.step === 3 && (
        <ReviewAndSubmit
          state={state}
          dispatch={dispatch}
          onSubmit={handleSubmit}
        />
      )}

      {showSuccess && <h3>Form Submitted Successfully </h3>}
    </div>
  );
}

export default App;


