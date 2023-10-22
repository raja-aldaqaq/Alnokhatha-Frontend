import axios from 'axios'
import { useState } from 'react'

const Slip = ({ slip }) => {
  return (
    <div>
      {slip.map((slip) => (
        <div key={slip._id}>
          <h1>{slip.number}</h1>
        </div>
      ))}
    </div>
  )
}
export default Slip
