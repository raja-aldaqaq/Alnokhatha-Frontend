import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const EditSlip = () => {
  let { boatSlip_id } = useParams()
  let navigate = useNavigate()
  const [values, setValues] = useState({
    boatSlip_id: boatSlip_id,
    number: '',
    Available: ''
  })
  useEffect(() => {
    axios
      .get('http://localhost:3001/boatSlip/slip/' + boatSlip_id)
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
      .put('http://localhost:3001/boatSlip/update/' + boatSlip_id, values)
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

export default EditSlip
