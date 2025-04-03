import { useState } from "react"

export default function rule(){
  const [ time, setTime ] = useState('');
  const [ field, setField ] = useState('');

  const enterField = (event) => {
    setField(event.target.value)
  }
  const enterTime = (event) => {
    setTime(event.target.value)
  }
  

  return(
    <>

    </>
  )
}