import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1>share password and username is </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
