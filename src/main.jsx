import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './integrations/supabase/index.js'
import { SupabaseAuthProvider } from './integrations/supabase/auth.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SupabaseProvider>
        <SupabaseAuthProvider>
          <App />
        </SupabaseAuthProvider>
      </SupabaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
