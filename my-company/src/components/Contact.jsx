import React from 'react'
import { useState } from 'react'

function Contact() {
  const [name, setName] = useState("")

  function handleChange(e){
      setName (e.target.value)
  }
  return (
    <div style={{background:"gray", color:"white"}}>
      <h1>Contact us</h1>
      <form action="" style={{display:"flex", flexDirection:"column"}}>
        <input type="text" placeholder='what is your name' value={name} onChange={handleChange}/>
        <textarea name="" id="name"></textarea>
        <button style={{background: "green"}} >Submit</button>
      </form>
      <h1>your name is {name}</h1>
    </div>
  )
}

export default Contact
