import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  let navigat = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    CPR: '',
    email: '',
    phoneNumber: '',
    pic: null , 
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
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
    formData.append('name', formValues.name)
    formData.append('CPR', formValues.CPR)
    formData.append('email', formValues.email)
    formData.append('phoneNumber', formValues.phoneNumber)
    formData.append('pic', formValues.pic)
    formData.append('password', formValues.password)
    await RegisterUser(formData)
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigat('/signin')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="ُEnter your Full Name"
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
              placeholder="ُEnter your CPR Number"
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
              placeholder="example@example.com"
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
              placeholder="ُEnter your Phone Number"
              value={formValues.phoneNumber}
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
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button onSubmit={handleSubmit}
            disabled={
              !formValues.CPR ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
