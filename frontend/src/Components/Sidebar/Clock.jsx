import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN'));

  useEffect(() => {
    const intervalID = setInterval(() => {
      const updateTime = new Date().toLocaleTimeString('en-IN');
      setTime(updateTime);
    }, 1000);

    return () => clearInterval(intervalID); 
  }, []); 

  return <div>{time}</div>;
};

export default Clock;
