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
    picture: ''
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
      <div className="boatformBG">
        <form onSubmit={handleSubmit} className="boat form">
          <div>
            <label htmlFor="name">Boat Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={boatState.name}
              required
            />
          </div>

          <div>
            <label htmlFor="number">Boat Number:</label>
            <input
              type="text"
              id="number"
              onChange={handleChange}
              value={boatState.number}
              required
            />
          </div>

          <div>
            <label htmlFor="size">Boat Size:</label>
            <input
              type="text"
              id="size"
              onChange={handleChange}
              value={boatState.size}
              required
            />
          </div>

          <div>
            <label htmlFor="license_type">License Type :</label>
            <select
              id="license_type"
              onChange={handleChange}
              value={boatState.license_type}
              defaultValue={'pleasure'}
              required
            >
              <option value="pleasure">pleasure</option>
              <option value="fisher">fisher</option>
              <option value="service">service</option>
              <option value="passenger">passenger</option>
            </select>
          </div>

          {boatState.license_type === 'fisher' ? (
            <div>
              <label htmlFor="license_expiry_date">license Expiry Date</label>
              <input
                type="date"
                id="license_expiry_date"
                onChange={handleChange}
                value={boatState.license_expiry_date}
              />
            </div>
          ) : null}

          <div>
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              id="picture"
              onChange={handleChange}
              value={boatState.picture}
            />
          </div>

          <button type="submit">Add Boat</button>
        </form>
      </div>
    </>
  )
}

export default AddBoat
