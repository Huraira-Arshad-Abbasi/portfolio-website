import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark_mode'>
      <div className='fixedbg dark_mode'></div> 
      <App />
    </div>
  </React.StrictMode>
)
