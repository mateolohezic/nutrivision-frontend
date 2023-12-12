import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <main className='contenedorRoot'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
