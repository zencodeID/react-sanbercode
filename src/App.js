import React from 'react'
import Tugas7 from './components/tugas7/Tugas7';
import Tugas8 from './components/tugas8/Tugas8';
import "./App.css"
// import Contohstate from './components/Contohstate';
import Tugas9 from './components/tugas9/Tugas9';
import Tugas10 from './components/tugas10/Tugas10';

function App (props) {
  return (
    <div className='container'>
    <Tugas7/>
    <Tugas8 name="sarah" email="subkh4n@gmail.com" batch="32"/> 
    {/* <Contohstate/> */}
    <Tugas9/>
    <Tugas10/>
    </div>
  )
}

export default App;