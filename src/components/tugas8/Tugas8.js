import React from 'react'

function Tugas8(props) {
  return (
    <div className='card'>
      <h1>Data diri peserta Kelas React.js</h1>
      <hr></hr>
     <ul>
        <li>Nama Lengkap: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Batach Pelatihan: {props.batch}</li>
     </ul>
    </div>
  )
}

export default Tugas8;