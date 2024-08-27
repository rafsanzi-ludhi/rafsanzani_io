import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './tailwind.css' //! This used to be index.css but now we are using tailwind which has index.css in it after installation



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
