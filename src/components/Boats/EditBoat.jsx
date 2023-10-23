import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const EditBoat = () => {

  let { boat_id } = useParams()

  let navigate = useNavigate()

  const [values, setValues] = useState({
    boat_id: boat_id,
    name: '',
    number: '',
    size: '',
    license_type: '',
    license_expiry_date: '',
    picture: ''
  })

  useEffect(() => {
    axios
      .get('http://localhost:3001/boatSlip/slip/' + boat_id)
      .then((res) => {
        console.log(res.data)
        setValues({
          ...values,
          number: res.data.number,
          Available: res.data.Available
        })
      })
      .catch((err) => console.log(err))
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put('http://localhost:3001/boatSlip/update/' + boat_id, values)
      .then((res) => {
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <form>
      <label htmlFor="number">Slip Number</label>
      <input
        type="text"
        id="number"
        value={values.number}
        onChange={(e) => setValues({ ...values, number: e.target.value })}
      />
      <select
        id="Available"
        value={values.Available}
        onChange={(e) => setValues({ ...values, Available: e.target.value })}
      >
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        Edit Slip
      </button>
    </form>
  )
}

export default EditBoat
