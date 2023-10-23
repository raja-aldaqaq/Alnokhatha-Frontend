import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditHarbor = () => {
  let navigate = useNavigate()
  const { harbor_id } = useParams()
  const [values, setValues] = useState({
    harbor_id: harbor_id,
    name: '',
    location: ''
  })
  useEffect(() => {
    axios
      .get('http://localhost:3001/harbor/' + harbor_id)
      .then((res) => {
        console.log(res.data)
        setValues({
          ...values,
          name: res.data.name,
          location: res.data.location
        })
      })
      .catch((err) => console.log(err))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put('http://localhost:3001/harbor/update/' + harbor_id, values)
      .then((res) => {
        navigate('/harbors')
      })
      .catch((err) => console.log(err))
  }
  return (
    <form action="">
      <label htmlFor="name">Harbor Name </label>
      <input
        type="text"
        id="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={values.location}
        onChange={(e) => setValues({ ...values, location: e.target.value })}
      />
      <button type="submit" onClick={handleSubmit}>
        Edit Harbor
      </button>
    </form>
  )
}
export default EditHarbor
