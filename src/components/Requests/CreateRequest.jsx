import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateRequest = ({ getRequests, user,  harbors}) => {
  let navigate = useNavigate()

  console.log("user",user)
  const initialState = {
    Boat: '',
    User: user._id,
    Harbor: '',
    boatSlip: '',
    StartDate: '',
    ExpiryDate: '',
    price: '',
    Approved: false
  }

  const [requestState, setRequestState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('كوثر تقول هاي او اي شي',requestState)
    await axios.post('http://localhost:3001/request/add', requestState)
    setRequestState(initialState)
    getRequests()
    navigate('/viewRequests')
  }


  const [boats, setBoats] = useState([])

  const getMyBoats = async () => {
    try {
      console.log('kkkkkkk:' + user._id)
      let res = await axios.get(
        'http://localhost:3001/boat/myBoats/' + user._id
      )
      console.log(res.data)
      setBoats(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(user._id)

  useEffect(() => {
    getMyBoats()
  }, [])

  const handleChange = (event) => {
    setRequestState({ ...requestState, [event.target.id]: event.target.value })
  }

  return (
    <>
      <h1>Create a Request</h1>
      <div className="boatformBG">
        <form  className="boat form" onSubmit={handleSubmit}>

          <select onChange={handleChange} id="Boat" value={requestState.Boat}>
            <option value=" "> </option>
            {boats.map((boat) => (
              <option key={boat._id} value={boat._id}>{boat.name}</option>
              ))}
          </select>

          <select onChange={handleChange} id="Harbor" value={requestState.Harbor}>
            {harbors.map((harbor) => (
              <option key={harbor._id} value={harbor._id}>{harbor.name}</option>
            ))}
          </select>

          <input type="hidden" name="user" id="user" value={requestState.user} />

          <button type="submit" >Add Request</button>
        </form>
      </div>
    </>
  )
}

export default CreateRequest
