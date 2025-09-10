import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const click = () =>{
    setColor(color === "black" ? "white" : "black");
  }
  useEffect(() => {
    document.body.style.backgroundColor = color;
  } , [color])
  return (
    <div className="App">
      <button onClick = {() => {click("white")}}>Switch Theme</button>
    </div>
  )
}
export default App;
