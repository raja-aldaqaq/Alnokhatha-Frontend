import { Link,useParams } from 'react-router-dom'
import axios from 'axios'

const ViewBoats = ({ boat }) => {
  
  const { boat_id } = useParams()

  function deleteOne(boat_id) {
    axios
      .delete('http://localhost:3001/boat/delete/' + boat_id)
      .then(() => {
        console.log('Deleted')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="allboats">
      {boat.map((boat) => (
        <div key={boat._id} className="boat">
          <h3>Name : {boat.name}</h3>
          <Link to={`/boat/update/${boat._id}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/boat/delete/${boat._id}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                deleteOne(boat._id)
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
