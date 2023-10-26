import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ViewBoats = ({ boats, user }) => {

  let navigate = useNavigate()

  const { boat_id } = useParams()

  function deleteOne(boat_id) {
    axios
      .delete('http://localhost:3001/boat/delete/' + boat_id)
      .then(() => {
        navigate('/viewBoats')
        console.log('Deleted')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
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
                if(user.type==='admin'||user.type ==='staff'){
                  navigate('/viewBoats')
                }else{
                  navigate('/myBoats')
                }
                boats.splice(index,1)
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

export default ViewBoats
