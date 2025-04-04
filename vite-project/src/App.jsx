import { useState } from "react"
import './rule/rule.css'

function App() {
  const [field, setfield ] = useState('');

  const [time, setTime ]  = useState(0);
  
  const calculator = () => {
    console.log('dd')
  }

  return(
    <>
      <button onClick={calculator}></button>
    </>
  )

}

export default App
