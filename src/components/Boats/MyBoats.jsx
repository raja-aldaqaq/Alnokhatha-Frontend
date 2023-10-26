import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const MyBoats = ({ user }) => {
  let navigate = useNavigate()

  console.log(user)
  // const { user_id } = useParams()
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

  function deleteOne(boat_id) {
    axios
      .delete('http://localhost:3001/boat/delete/' + boat_id)
      .then(() => {
        navigate('/viewBoats')
        console.log('Deleted')
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getMyBoats()
  }, [])

  return (
    <div className="allboats">
      {boats.map((boat, index) => (
        <div key={boat._id} className="harbor">
          <h3>Name : {boat.name}</h3>
          <Link to={`/boat/update/${boat._id}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/boat/delete/${boat._id}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                deleteOne(boat._id)
                navigate('/myBoats')
                boats.splice(index, 1)
              }}
            >
              Delete
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyBoats
