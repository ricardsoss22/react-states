import { useState } from "react";

function Counter() {
  const [result, setResult] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function addOne() {
    console.log("Funkcija izsaukta");
    setResult(result + 1);
    console.log("x vērtība ir " + result);
  }

function minusOne() {
  setResult(result - 1);
}


  function multiply() {
    setResult(result * multiplier);
  }

  function handleChange(kakens) {
    setMultiplier(kakens.target.value);
  }

  return (
    <div>
      <button onClick={addOne}>+ 1</button>
      <button onClick={minusOne}>- 1</button>
      <input  onChange = {handleChange} type="number" value={multiplier}/>
      <button onClick={() => multiply()}>*</button>
  <h1>{result}</h1>
    </div>
  );
}




export default Counter;



