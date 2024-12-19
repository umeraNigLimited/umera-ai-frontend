import React from 'react'
import '../style/Prompt.css'

function PromptBody({children}) {
  return (
    <div className='prompts'>
       {children}
    </div>
  )
}

export default PromptBody