import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Drawer from './components/drawer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Drawer/>
  </StrictMode>
)
