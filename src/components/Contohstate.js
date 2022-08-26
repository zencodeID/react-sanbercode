import React from 'react'
import {useState} from 'react'

function Contohstate() {
    const[name,setName]=useState("Jhon");
    const handleName=()=>{
        setName("Aris")
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleName}>Change</button>
    </div>
  )
}

export default Contohstate