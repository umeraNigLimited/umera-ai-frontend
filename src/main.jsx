import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { PromptContextProvider } from './context/PromptContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <PromptContextProvider>
        <App />
      </PromptContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
