import React from 'react'
import TextArea from './TextArea'
import Greeting from './Greeting'
import PromptBody from './PromptBody'
import Header from './Header'
import Prompts from './Prompts'
import Reply from './Reply'

// import '../style/Main.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header/>
        {/* the greeting is conditinally placed and removed after typing something */}
        <Greeting name='Bukola'/>
        <PromptBody>
          <Prompts/>
          <Reply/>
        </PromptBody>
        <TextArea/>
    </div>
  )
}

export default Dashboard