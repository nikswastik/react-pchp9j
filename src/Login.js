import React, { useState } from 'react';
let test = 10;
export const Login = ({ name, time }) => {
  const [test, settest] = useState('swastik');
  const [ages, setAges] = useState({ name: 'swas' });
  // let n = 'swastiik';
  const click = () => {
    settest('yatin');
    // n = 'yatin';
  };
  return (
    <div>
      {time}

      <button onClick={click}>click</button>
      {ages.name}
    </div>
  );
};
