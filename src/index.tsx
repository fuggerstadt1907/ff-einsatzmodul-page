import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'
import './dayjs'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('einsatz-modul') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
