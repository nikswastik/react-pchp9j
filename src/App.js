import React from 'react';
import './style.css';
import { Login } from './Login';
export default function App() {
  let name="hbsuw"
  return (
    <div>
      <Login name={name} />
    
      {/* <Login /> */}

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
