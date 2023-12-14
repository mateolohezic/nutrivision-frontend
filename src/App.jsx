import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Pacientes from './Pages/Pacientes/Pacientes'

function App() {

  return (
    <>
      <main className='contenedorRoot'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/pacientes' element={<Pacientes/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
