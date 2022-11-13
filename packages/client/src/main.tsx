import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter as BRouter} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BRouter >
      <App />
    </BRouter>
  </React.StrictMode>
)
