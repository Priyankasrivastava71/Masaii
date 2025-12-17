import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards</h1>

      <MessageCard 
        title="Welcome"
        message="Welcome to React props concept."
      />

      <MessageCard 
        title="React"
        message="React allows component reuse using props."
      />

      <MessageCard 
        title="Learning"
        message="I am learning React step by step."
      />

      <MessageCard 
        title="Success"
        message="Practice daily to become confident in React."
      />
    </div>
  );
}

export default App;
