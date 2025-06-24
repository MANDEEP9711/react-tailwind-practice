import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import File from './comp/Nav.jsx'
import './App.css'
import About from './comp/About.jsx'

function App() {
  return (
    <div>
       <div><File /></div>
       <div><About /></div>
    </div>
  )
}

export default App
