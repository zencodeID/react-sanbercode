import React, { useState,useEffect } from 'react'
import axios from 'axios'

const AppFetch = () => {

  //materi fetching data
  const [data, setData] = useState(null)

  //materi create data
  const [input, setInput] = useState(
    {
      name: ""
    }
  )

  // const ContohFecth = () => {
//   const [data, setData] = useState(null)
//   // handle input state
//   const [input, setInput] = useState(
//     {
//       name:""
//     }
//   )

// ==================================
  //indikator
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    //fetch data dengan kondisi
    if (fetchStatus === true) {
      axios.get("http://backendexample.sanbercloud.com/api/contestants")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

//   const [fetchStatus, setFetchStatus] = useState(true)

//   useEffect(() => {
//     //fetch data dengan kondisi
//     if (fetchStatus === true) {
//       axios.get("http://backendexample.sanbercloud.com/api/contestants")
//         .then((res) => {
//           setData([...res.data])
//         })
//         .catch((error) => {
//         })
//         // supaya tidak berulang
//       setFetchStatus(false)
//     }

//   }, [fetchStatus, setFetchStatus])

//=================================

  //handling input
  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value

    if (name === "name") {
      setInput({ ...input, name: value })
    }
  }

//   const handleInput = (event) => {
//       // console.log(event.target)
//     let name = event.target.name
//     let value = event.target.name

//     if(name === "name"){
//       setInput({...input, name:value})
//     } //else if(name === "hobby"){
//      // setInput({...input,hobby:value})
//    // }
//   }
//======================================

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault()

    let {
      name
    } = input

    //create data
    axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })

    //clear input setelah create data
    setInput(
      {
        name: ""
      }
    )
  }

//   //handling submit
//   const handleSubmit = (event) => {
//     event.preventDefault()

//     let {
//       name
//     } = input

//     //create data
//     axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
//       .then((res) => {
//         console.log(res)
//         setFetchStatus(true)
//       })

//     //clear input setelah create data
//     setInput(
//       {
//         name: ""
//       }
//     )
//   }

//================================================
  return (

    <>
      <div>
        <ul>
          {data !== null && data.map((res) => {
            return (
              <>
                <li>  {res.name} </li>
              </>
            )
          })}
        </ul>
      </div>
{/* 
//   return (
//     <>
//       <div>
//         <ul>    
//           { data !== null && data.map((res) => {
//             return (
//               <>
//                 <li>  {res.name} </li>
//               </>
//             )
//           })}
//         </ul>
//       </div> 
====================================*/}


      <p>FORM DATA</p>

      {/* form data */}
      <form onSubmit={handleSubmit}>
        <span>Nama : </span>
        <input onChange={handleInput} value={input.name} name='name' />
        <input type={'submit'} />
      </form>
    </>

  )
}

export default AppFetch












//       {/* make handle input */}
//       <p>Belajar handling input :</p>
//         <form onSubmit={handleSubmit}>
//           <span>nama : </span>
//           <input onChange={handleInput} value={input.name} name='name' />
//           <br/>
//           {/* <input onChange={HandleInput} value={input.name} type="text" name='hobby' /> */}
//           <br/>
//           <input type={'submit'}/>
//         </form>

//     </>
//   )

// }


// export default ContohFecth