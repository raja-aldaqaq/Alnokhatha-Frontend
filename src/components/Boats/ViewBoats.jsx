import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewBoats = ({ boat }) => {
  return (
    <div className="allboats">
      {boat.map((boat) => (
        <div key={boat._id} className="boat">
          <h3>Name : {boat.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ViewBoats
