import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Slip = ({ slip }) => {
  const { slip_id } = useParams()
  function deleteOne(slip_id) {
    axios
      .delete('http://localhost:3001/boatSlip/delete/' + slip_id)
      .then(() => {
        console.log('DONE')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {slip.map((slip) => (
        <div key={slip._id} className="harbor">
          <h3>{slip.number}</h3>
          <h3>{slip.Harbor.name}</h3>
          <Link to={`/slip/delete/${slip._id}`}>
            <button
              onClick={(e) => {
                e.preventDefault()
                deleteOne(slip._id)
              }}
            >
              Delete
            </button>
          </Link>
          <Link to={`/slip/update/${slip._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Slip
