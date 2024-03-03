import { useState } from "react";

export function Counter() {
  console.log("counter gets rendered");
  const result = useState(3);
  const currentCounterValue = result[0];
  const setCounterValue = result[1];
  function handleButtonClick() {
    console.log("button clicked");
    setCounterValue(currentCounterValue - 1);
  }

  if (currentCounterValue === 0) {
    return (
      <div>
        <div className="huge">{"🚀"}</div>
        <br />
        <button onClick={handleButtonClick}>Decrement</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="huge">{currentCounterValue}</div>
        <br />
        <button onClick={handleButtonClick}>Decrement</button>
      </div>
    );
  }
}
