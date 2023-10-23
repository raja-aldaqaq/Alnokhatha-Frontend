import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBoat = ({ getBoats }) => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    number: '',
    size: '',
    license_type: '',
    license_expiry_date: '',
    picture: '',
  }
  const [boatState, setBoatState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/boat/addBoat', boatState)
    setBoatState(initialState)
    getBoats()
    navigate('/viewBoats')
  }
  const handleChange = (event) => {
    setBoatState({ ...boatState, [event.target.id]: event.target.value })
  }

  return (
    <>
    <h1>Add Boat</h1>
    <div className='boatformBG'>
    <form onSubmit={handleSubmit} className="boat form">
      <div>
        <label htmlFor="name">Boat Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={boatState.name}
        />
      </div>

      <div>
        <label htmlFor="number">Boat Number:</label>
        <input
          type="text"
          id="number"
          onChange={handleChange}
          value={boatState.number}
        />
      </div>

      <div>
        <label htmlFor="size">Boat Size:</label>
        <input
          type="text"
          id="size"
          onChange={handleChange}
          value={boatState.size}
        />
      </div>

      <div>
        <select
          id="license_type"
          onChange={handleChange}
          value={boatState.license_type}
        >
          <option value="fisher">fisher</option>
          <option value="pleasure">pleasure</option>
          <option value="service">service</option>
          <option value="passenger">passenger</option>
        </select>
      </div>

      <button type="submit">Add Boat</button>
    </form>
    </div>
    </>
  )
}

export default AddBoat
