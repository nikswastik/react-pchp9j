import React, { useState } from 'react';
let test = 10;
export const Login = ({ name }) => {
  const [test, settest] = useState('swastik');
  // let n = 'swastiik';
  const click = () => {
    settest('yatin');
    // n = 'yatin';
  };
  return (
    <div>
      {test}

      <button onClick={click}>click</button>
    </div>
  );
};
