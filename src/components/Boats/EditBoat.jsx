import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditBoat = ({user}) => {

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
      .get('http://localhost:3001/boat/detail/' + boat_id)
      .then((res) => {
        console.log(res.data)
        setValues({
          ...values,
          name: res.data.name,
          number: res.data.number,
          size: res.data.size,
          license_type: res.data.license_type,
          license_expiry_date: res.data.license_expiry_date,
          picture: res.data.picture
        })
      })
      .catch((err) => console.log(err))
  }, [])


  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put('http://localhost:3001/boat/update/' + boat_id, values)
      .then((res) => {
        if(user.type==='admin'||user.type ==='staff'){
          navigate('/viewBoats')
        }else{
          navigate('/myBoats')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="boat form">
          <div>
            <label htmlFor="name">Boat Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={values.name}
              required
            />
          </div>

          <div>
            <label htmlFor="number">Boat Number:</label>
            <input
              type="text"
              id="number"
              onChange={handleChange}
              value={values.number}
              required
            />
          </div>

          <div>
            <label htmlFor="size">Boat Size:</label>
            <input
              type="text"
              id="size"
              onChange={handleChange}
              value={values.size}
              required
            />
          </div>

          <div>
            <label htmlFor="license_type">License Type :</label>
            <select
              id="license_type"
              onChange={handleChange}
              value={values.license_type}
              defaultValue={'pleasure'}
              required
            >
              <option value="pleasure">pleasure</option>
              <option value="fisher">fisher</option>
              <option value="service">service</option>
              <option value="passenger">passenger</option>
            </select>
          </div>

          {values.license_type === 'fisher' ? (
            <div>
              <label htmlFor="license_expiry_date">license Expiry Date</label>
              <input
                type="date"
                id="license_expiry_date"
                onChange={handleChange}
                value={values.license_expiry_date}
              />
            </div>
          ) : null}

          <div>
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              id="picture"
              onChange={handleChange}
              value={values.picture}
            />
          </div>

          <button type="submit">Update Boat</button>
        </form>
    </>
  )
}

export default EditBoat
