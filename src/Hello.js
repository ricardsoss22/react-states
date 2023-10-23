import { useState } from "react";

function Hello(props) {
    const [name, setName] = useState(props.name);

    function handleChange(event) {
      setName(event.target.value);
    }
  
    return (
      <div>
        <input
          type="text"
          value = {name}
          onChange={handleChange}
        />
        <p>Hello, {name}!</p>
      </div>
    );
  }
  

  export default Hello;