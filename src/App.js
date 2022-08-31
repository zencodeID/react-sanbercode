import React from 'react'
// import Tugas7 from './components/tugas7/Tugas7';
// import Tugas8 from './components/tugas8/Tugas8';
import "./App.css"
import AppFetch from './components/ContohFecth';
// // import Contohstate from './components/Contohstate';
// import Tugas9 from './components/tugas9/Tugas9';
// import Tugas10 from './components/tugas10/Tugas10';
// import Tugas11 from './components/tugas11/Tugas11';

function App (props) {
  return (
    <div className='container'>
      {/* <Tugas7/>
    <Tugas8 name="sarah" email="subkh4n@gmail.com" batch="32"/> 
    <Contohstate/>
    <Tugas9/>
    <Tugas10/>  
    <Tugas11/> */}
    <AppFetch/>
    </div>
  )
}

export default App;