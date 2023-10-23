import { Link } from 'react-router-dom'

const Harbors = ({ harbor }) => {
  return (
    <div>
      {harbor.map((harbor) => (
        <div key={harbor._id} className="harbor">
          <h3>Name : {harbor.name}</h3>
          <h3>{harbor.location}</h3>
          <Link to={`/harbor/delete/${harbor._id}`}>
            <button>Delete</button>
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
