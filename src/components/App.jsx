import React, { useState } from "react";

function App() {
  setInterval(updateTime);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>Live Clock</h1>
      <br />
      <br />
      <h2>{time}</h2>
    </div>
  );
}

export default App;
