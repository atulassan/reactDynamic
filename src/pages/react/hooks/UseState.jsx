import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>UseState Example</h1>
        <p>
          This is an example of using the useState hook in React.
        </p>
          <p>
            Count: {count}
          </p>
          <button onClick={() => setCount(count + 1)}>
            Increment Count
          </button>
      </div>
    </>
  )
}

export default UseState