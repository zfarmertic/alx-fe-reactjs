import React from 'react'
import { useState } from 'react'

function Contact() {
  // 1. Track what the user is typing
  const [inputValue, setInputValue] = useState("")
  // 2. Track what should be displayed after the click
  const [submittedName, setSubmittedName] = useState("")

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault() // Prevents the page from refreshing
    setSubmittedName(inputValue) // Moves the typed value to the display state
  }

  return (
    <div style={{ background: "gray", color: "white", padding: "20px" }}>
      <h1>Contact us</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="text" 
          placeholder='What is your name?' 
          value={inputValue}
          onChange={handleInputChange}
        />
        <textarea placeholder="Your message..."></textarea>
        
        <button 
          style={{ background: "green", color: "white", cursor: "pointer" }} 
          onClick={handleClick}
        >
          Submit
        </button>
      </form>

      {/* This only shows content if submittedName is not empty */}
      {submittedName && (
        <h1 style={{ marginTop: "20px" }}>
          Your name is: {submittedName}
        </h1>
      )}
    </div>
  )
}

export default Contact