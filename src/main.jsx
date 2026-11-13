import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreProvider } from './context/StoreContext'   // add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>        {/* add this */}
      <App />
    </StoreProvider>       {/* and this */}
  </StrictMode>,
)