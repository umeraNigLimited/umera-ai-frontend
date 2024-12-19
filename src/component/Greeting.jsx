import React from 'react'

function Greeting({name}) {
  return (
    <div>
        {name ? <h1>{`What can i help you with ${name}?`}</h1> : <h1>What can i help you with ? </h1> }
    </div>
  )
}

export default Greeting