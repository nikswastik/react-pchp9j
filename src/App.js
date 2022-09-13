import React from 'react';
import './style.css';
import { Login } from './Login';

export default function App() {
  const [time, setTime] = React.useState('10');
  let name = 'hbsuw';

  const changeHandler = (text) => {
    console.log(text.target.value);
    setTime(text.target.value);
  };
  return (
    <div>
      <input onChange={changeHandler} />
      <Login time={time} />

      {/* <Login /> */}
{time}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
