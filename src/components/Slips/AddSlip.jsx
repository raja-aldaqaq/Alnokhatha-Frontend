import axios from 'axios'
import { useState } from 'react'

const AddSlip = ({ getSlips, harbor }) => {
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
  }
  const handleChange = (event) => {
    setSlipState({ ...slipState, [event.target.id]: event.target.value })
  }
  return (
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
  )
}
export default AddSlip
