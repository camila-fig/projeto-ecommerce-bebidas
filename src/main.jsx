import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoriesProvider } from './context/categoriesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
