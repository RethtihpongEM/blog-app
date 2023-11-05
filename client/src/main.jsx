import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import {BlogProvider} from './contexts/BlogContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BlogProvider>
        <RouterProvider router={router}/>
      </BlogProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
