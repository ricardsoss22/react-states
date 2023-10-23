import Counter from "./Counter";
import Hello from "./Hello"

function App() {
  const allNames = ["rudis" ,"ruda mamma" ,"ruda tetis"];
  const allNumbers = ["6" ,"9" ,"7"];
  const nameJSX = allNames.map((name,index) =>{
    return <Hello name={name}/>
  })
  const numberJSX = allNumbers.map((value,index) =>{
    return <Counter value={value} />
  })

  return (
    <div className="App">
      <Counter/>
      <Hello/>
      {nameJSX}
      {numberJSX}
    </div>
  );
}


export default App;
