import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { OpenAIProvider } from './integrations/openai/index.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenAIProvider>
        <App />
      </OpenAIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
