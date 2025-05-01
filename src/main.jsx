import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
