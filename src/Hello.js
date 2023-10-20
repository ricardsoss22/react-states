import { useState } from "react";

function Hello() {
    const [name, setName] = useState("");

    function handleChange(event) {
      setName(event.target.value);
    }
  
    return (
      <div>
        <input
          type="text"
          placeholder="Ievadi savu vardu"
          onChange={handleChange}
        />
        <p>Hello, {name}!</p>
      </div>
    );
  }

  export default Hello;