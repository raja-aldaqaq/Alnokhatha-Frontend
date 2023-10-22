import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Register from '../pages/Register'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'


const App = () => {
  const [issues, setIssues] = useState([])

  const getIssues = async () => {
    try {
      let res = await axios.get('http://localhost:3001/issues')
      setIssues(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
