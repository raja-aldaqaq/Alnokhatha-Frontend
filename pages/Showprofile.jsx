
import { useState, useEffect } from "react"
import Client from '../services/api'

const UpdateProfile = ({ user }) => {
  const [value, setValue] = useState({
    name: '',
    CPR: '',
    email: '',
    phoneNumber: '',
    pic: null,
    password: '',
    confirmPassword: ''
  })
  let { _id } = user
  useEffect(() => {
    Client.get(`http://localhost:3001/auth/Showprofile/${_id}`)
      .then(res => console.log(res.data))
      .catch(res => console.log(err))
  }, [])

  
  
  const handleChange = (e) => {
    // setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  
  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      pic: e.target.files[0],
    })
    console.log(e.target.files[0])
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', value.name)
    formData.append('CPR', value.CPR)
    formData.append('email', value.email)
    formData.append('phoneNumber', value.phoneNumber)
    formData.append('pic', value.pic)
    formData.append('password', value.password)
  }





  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit} encType="multipart/form-data">
          <h1> Update</h1>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="ُEnter your Full Name"
              value={value.name}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">CPR Number</label>
            <input
              onChange={handleChange}
              name="CPR"
              type="text"
              placeholder="ُEnter your CPR Number"
              value={value.CPR}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={value.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Phone Number</label>
            <input
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="ُEnter your Phone Number"
              value={value.phoneNumber}
              required
            />
          </div>

          <div>
            <label htmlFor="file" className="sr-only">
              Upload your personal photo
            </label>
            <input id="file" type="file" accept='image/*' onChange={handlePicChange} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={value.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={value.confirmPassword}
              required
            />
          </div>
          <button onSubmit={handleSubmit}
            // disabled={
            //   !formValues.CPR ||
            //   (!formValues.password &&
            //     formValues.confirmPassword === formValues.password)
            // }
          >
            update
          </button>
        </form>
      </div>
    </div>
  )
}
export default UpdateProfile