import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import Nav from './components/Nav'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import AddSlip from './components/Slips/AddSlip'
import Slip from './components/Slips/Slip'
import Harbors from './components/Harbors/harbors'
import AddBoat from './components/Boats/AddBoat'
import ViewBoats from './components/Boats/viewBoats'
import Showprofile from './components/pages/Showprofile'
import AddUsers from './components/pages/AddUsers'
import AddHarbor from './components/Harbors/AddHarbor'
import EditHarbor from './components/Harbors/EditHarbor'
import EditSlip from './components/Slips/EditSlip'
import Show from './components/pages/Show'
import { CheckSession } from '../services/Auth'

const App = () => {
  let navigate = useNavigate()

  const [slip, setslips] = useState([])
  const [boat, setBoats] = useState([])
  const [harbor, setHarbors] = useState([])

  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    getSlips()
    getHarbors()

    if (token) {
      checkToken()
    }
  }, [])
  const getSlips = async () => {
    try {
      let res = await axios.post('http://localhost:3001/boatSlip/slips')
      setslips(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getBoats = async () => {
    try {
      let res = await axios.get('http://localhost:3001/boat/viewBoats')
      // console.log(res.data)
      setBoats(res.data)
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
    getBoats()
    getHarbors()
  }, [])

  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addSlip"
            element={<AddSlip getSlips={getSlips} harbor={harbor} />}
          />
          <Route path="/slip" element={<Slip slip={slip} />} />
          <Route path="/addBoat" element={<AddBoat getBoats={getBoats} />} />
          <Route path="/viewBoats" element={<ViewBoats boat={boat} />} />
          <Route path="/Showprofile" element={<Showprofile user={user} />} />
          <Route path="/Show" element={<Show user={user} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/addUsers" element={<AddUsers />} />
          <Route path="/SignIn" element={<SignIn setUser={setUser} />} />
          <Route path="/harbors" element={<Harbors harbor={harbor} />} />
          <Route
            path="/addHarbor"
            element={<AddHarbor getHarbors={getHarbors} />}
          />
          <Route path="/harbor/update/:harbor_id" element={<EditHarbor />} />
          <Route path="/harbor/delete/:harbor_id" element={<Harbors />} />
          <Route path="/slip/update/:boatSlip_id" element={<EditSlip />} />
          <Route path="/slip/delete/:boatSlip_id" element={<Slip />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
