import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const AddHarbor = ({ getHarbors }) => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    location: '',
    picture: ''
  }
  const [harborState, setHarborState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/harbor/create', harborState)
    setHarborState(initialState)
    getHarbors()
    navigate('/harbors')
  }
  const handleChange = (event) => {
    setHarborState({ ...harborState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="formSlip">
      <label htmlFor="name">Harbor Name:</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={harborState.name}
      />
      <label htmlFor="location">Harbor Location:</label>
      <input
        type="text"
        id="location"
        onChange={handleChange}
        value={harborState.location}
      />

      <button type="submit">Add Harbor</button>
    </form>
  )
}
export default AddHarbor
