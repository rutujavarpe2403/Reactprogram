<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user.jsx'

function App() {
  return (
    <div>
      <User />
    </div>
  )
}

export default App

import React from 'react';
import Clock from './clock.jsx';
//import React, { useState } from 'react';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState('red')
  return (
    <div>
      <h1>Hello!</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"red"}>red</option>
        <option value={"green"}>green</option>
        <option value={"blue"}>blue</option>
      </select>
      <Clock color={color} />
    </div>
  );
}

export default App;

