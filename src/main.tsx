import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './25Task/App'
import NewApp from './25Task/NewApp'
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewApp />
  </StrictMode>,
)
