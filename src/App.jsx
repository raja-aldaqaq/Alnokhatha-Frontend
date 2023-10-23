import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddSlip from './components/Slips/AddSlip'
import Slip from './components/Slips/Slip'
import Harbors from './components/Harbors/harbors'
const App = () => {
  const [slip, setslips] = useState([])
  const [harbor, setHarbors] = useState([])
  const getSlips = async () => {
    try {
      let res = await axios.post('http://localhost:3001/boatSlip/slips')
      setslips(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getHarbors = async () => {
    try {
      let res = await axios.get('http://localhost:3001/harbor/harbors')
      setHarbors(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSlips()
  }, [])
  useEffect(() => {
    getHarbors()
  }, [])
  return (
    <div>
      
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/addSlip"
            element={<AddSlip getSlips={getSlips} harbor={harbor} />}
          />
          <Route path="/slip" element={<Slip slip={slip} />} />
          <Route path="/harbors" element={<Harbors />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
