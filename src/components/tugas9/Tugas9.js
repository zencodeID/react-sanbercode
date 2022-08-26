import React, { useState } from 'react'

function Tugas9(){
const [angka,setAngka]=useState(0);
const addAngka = () => {
    setAngka(angka+1);
}
  return (
    <div className='card'>
    <p className='angka'>{angka}</p>
    <button className="angka" onClick={addAngka}>Tambah</button>
    {angka >= 10 ? "stateCount anda sudah melampui angka 10": ""}
    </div>
  )
}

export default Tugas9;
