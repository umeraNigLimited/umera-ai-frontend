import { useEffect, useState } from 'react'
import Main from './component/Main'
import './style/Main.css'
import PopUp from './component/PopUp'
import { usePromptContext } from './hooks/usePromptContext'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {promptInfo, dispatch} = usePromptContext()
  // const {userInfo, dispatch : userDispatch} = useAuthContext()

  // const url = `http://127.0.0.1:5000/get?userMessage=${encodeURIComponent(userInput)}` || 
  // useEffect(()=> {
  //     const fetchPrompt = async () => {
  //       const result = await fetch(url)
  //       const json = await result.json()

  //       if(result.ok){
  //           dispatch({type: 'SET_PROMPT', payload: json})
  //       }
  //     }
  // }, [])
  return (
    <>
            <PopUp/>
            <Main/>
    </>

  )
}

export default App
