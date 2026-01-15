import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }
    function decrease(){
        setCount(count - 1)
    }
    function reset(){
        setCount(0)
    }

  return (
    <div>
        <button onClick={increment}>add</button>
        <button onClick={decrease}>reduce</button>
        <button onClick={reset}>reset</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter
