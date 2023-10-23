import { useState, useEffect } from 'react'
import './App.css'
import Register from '../pages/Register'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Nav from './components/Nav'


const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    
    setUser(null)
    localStorage.clear()
  }

  // const checkToken = async () => {
  //   const user = await CheckSession()
  //   setUser(user)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (token) {
  //     checkToken()
  //   }
  // }, [])
  
  
  return (
    <div>
    <Nav
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
    
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        </main>
    </div>
  )
}

export default App
