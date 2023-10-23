import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Harbors = ({ harbor }) => {
  const { harbor_id } = useParams()

  function deleteOne(harbor_id) {
    axios
      .delete('http://localhost:3001/harbor/delete/' + harbor_id)
      .then(() => {
        console.log('DONE')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      {harbor.map((harbor) => (
        <div key={harbor._id} className="harbor">
          <h3>Name : {harbor.name}</h3>
          <h3>{harbor.location}</h3>
          <Link to={`/harbor/delete/${harbor._id}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                deleteOne(harbor._id)
              }}
            >
              Delete
            </button>
          </Link>
          <Link to={`/harbor/update/${harbor._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Harbors
