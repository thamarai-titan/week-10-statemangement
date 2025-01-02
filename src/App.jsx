import { useState } from 'react'


function App() {
  return <div>
   <Light/>
  </div>
}

function Light(){
  const [bulbOn,setbulbOn] = useState(true)
  return <div>
    <BUlbState bulbOn={bulbOn}/>
    <Toggle setbulbOn={setbulbOn} bulbOn={bulbOn}/>
  </div>
}

function BUlbState({bulbOn}){

  
  return <div>
    {bulbOn ? "BULB ON" : "BULB OFF"}
  </div>
}

function Toggle({setbulbOn,bulbOn}){

  function toggleState(){
    setbulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggleState}>Toggle to On/Off</button>
  </div>
}
export default App
