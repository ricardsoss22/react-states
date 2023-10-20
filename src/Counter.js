import { useState } from "react";
import Hello from "./Hello"
 
function Counter() {
  const [result, setResult] = useState(0);
  const [changeValue, setChangeValue] = useState(1);

  function handleOperation(operation) {
    if (operation === "add") {
      setResult(result + changeValue);
    } else if (operation === "subtract") {
      setResult(result - changeValue);
    } else if (operation === "multiply") {
      setResult(result * changeValue);
    }
  }

  function handleChange(event) {
    setChangeValue(parseInt(event.target.value, 10));
  }

  return (
    <div>
      <input
        type="number"
        value={changeValue}
        onChange={handleChange}
      />
      <button onClick={() => handleOperation("add")}>+ {changeValue}</button>
      <button onClick={() => handleOperation("subtract")}>- {changeValue}</button>
      <button onClick={() => handleOperation("multiply")}>* {changeValue}</button>
      <h1>{result}</h1>
      <Hello />
    </div>
  );
}

export default Counter;
