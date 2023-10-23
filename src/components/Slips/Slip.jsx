import axios from 'axios'
import { useState } from 'react'
// import '/Users/zahralaradi/Desktop/GA/Project3/Alnokhatha-Frontend/src/App.css'
const Slip = ({ slip }) => {
  return (
    <div>
      {slip.map((slip) => (
        <div key={slip._id} className="harbor">
          <h3>{slip.number}</h3>

          <h3>{slip.Harbor.name}</h3>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  )
}
export default Slip
