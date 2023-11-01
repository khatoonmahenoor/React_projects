import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(1)    // give any name of setcounter and anything   setCounter

  // let counter = 15
  
const addValue = () => {
      // counter = counter + 1
      if(counter < 10){
        setCounter(counter + 1);
      }
     
      // console.log("clicked", counter);
  }

    const removeValue = () => {
      if(counter > 1){
        setCounter(counter - 1);
      }
       
      
  }

  return (
    <>
     <h1><u>React- Counter code</u></h1>
     <h2><u>Counter value: {counter} </u></h2>

<button onClick={addValue}>Add value: {counter}</button>
<br/><br/>
<button onClick={removeValue}>Remove value: {counter}</button>
<p>only check value between <u>1 to 22</u> = ({counter})</p>
    </>
  )
}

export default App
