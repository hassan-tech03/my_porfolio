import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS only, not JS to avoid conflicts
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap-custom.scss'
import './styles/design-tokens.scss'
import './styles/global.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
