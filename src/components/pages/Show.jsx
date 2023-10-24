import { useState, useEffect } from 'react'
import Client from '../../../services/api'
import { Link } from 'react-router-dom'

const Show = ({ user }) => {
  // const [formValues, setformValues] = useState({})
  const [formValues, setFormValues] = useState({
    name: '',
    CPR: '',
    email: '',
    phoneNumber: '',
    pic: ''
  })

  const handleChange = (e) => {
    const attribute = e.target.name
    const value = e.target.value

    const currentNewForm = { ...formValues }

    currentNewForm[attribute] = value
    console.log(currentNewForm)
    setFormValues(currentNewForm)
  }

  useEffect(() => {
    if (user) {
      user.pic = user.pic.replace('public', '')
      setFormValues({
        name: user.name,
        CPR: user.CPR,
        email: user.email,
        phoneNumber: user.phoneNumber,
        pic: user.pic
      })
    }
  }, [user])

  // const handleUpdate = async (e) => {
  //   e.preventDefault()
  //   const response = await Client.put(`/auth/EditProfile/${user._id}`, formValues)
  //   console.log(response)
  // }

  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      pic: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  return user ? (
    <div className="signin col">
      <div className="card-overlay centered">
        <form
        // className="col"
        // onSubmit={handleUpdate}
        // encType="multipart/form-data"
        >
          <h1> Show Profile</h1>
          <img src={`http://localhost:3001/${user.pic}`} />

          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              // placeholder="ُEnter your Full Name"
              // placeholder={formValues.name}
              value={formValues.name}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">CPR Number</label>
            <input
              onChange={handleChange}
              name="CPR"
              type="text"
              // placeholder="ُEnter your CPR Number"
              value={formValues.CPR}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              // placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Phone Number</label>
            <input
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              // placeholder="ُEnter your Phone Number"
              value={formValues.phoneNumber}
              required
            />
          </div>

          <Link to="/showprofile">
            <button>edit my profile</button>
          </Link>
          <button type="submit">change my password</button>
        </form>
      </div>
    </div>
  ) : 
    (<h1>loding</h1>)
}
export default Show
