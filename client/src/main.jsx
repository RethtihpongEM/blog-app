import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Signup } from './pages/authentication/Signup.jsx'
import { ThemeProvider } from '@material-tailwind/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Signup />
    </ThemeProvider>
  </React.StrictMode>,
)
