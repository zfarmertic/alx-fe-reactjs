import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function Increment(){
        setCount(count + 1)
    }
    function Decrement(){
        setCount(count - 1)
    }
    function Reset(){
        setCount(0)
    }

  return (
    <div>
        <button onClick={Increment}>add</button>
        <button onClick={Decrement}>reduce</button>
        <button onClick={Reset}>reset</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter
