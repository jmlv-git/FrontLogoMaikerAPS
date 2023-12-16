import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginController from './pages/LoginController'
import CriarLogoController from './pages/CriarLogoController'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginController />} />
        <Route path="/home" element={<CriarLogoController />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  )
}

export default App
