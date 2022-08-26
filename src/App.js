import React from 'react'
import Tugas7 from './components/tugas7/Tugas7';
import Tugas8 from './components/tugas8/Tugas8';
import "./App.css"

function App (props) {
  return (
    <div className='container'>
    <Tugas7/>
    <Tugas8 name="sarah" email="subkh4n@gmail.com" batch="32"/> 
    </div>
  )
}

export default App;