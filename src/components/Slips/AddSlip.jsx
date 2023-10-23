import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AddSlip = ({ getSlips, harbor }) => {
  let navigate = useNavigate()
  const initialState = {
    number: '',
    Available: 'true',
    Harbor: ''
  }
  const [slipState, setSlipState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/boatSlip/create', slipState)
    setSlipState(initialState)
    getSlips()
    navigate('/slip')
  }
  const handleChange = (event) => {
    setSlipState({ ...slipState, [event.target.id]: event.target.value })
  }
  return (
    <>
    <h1>Add slip</h1>
    <form onSubmit={handleSubmit} className="formSlip">
      <label htmlFor="number">Slip Number:</label>
      <input
        type="text"
        id="number"
        onChange={handleChange}
        value={slipState.number}
      />
      <select
        id="Available"
        onChange={handleChange}
        value={slipState.Available}
      >
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <select onChange={handleChange} id="Harbor" value={slipState.Harbor}>
        {harbor.map((harbor) => (
          <option value={harbor._id}>{harbor.name}</option>
        ))}
      </select>
      <button type="submit">Add Slip</button>
    </form>
    </>
  )
}
export default AddSlip
