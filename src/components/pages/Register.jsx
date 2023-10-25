import { useState } from 'react'
import { RegisterUser } from '../../../services/Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  let navigat = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    CPR: '',
    type: 'client',
    email: '',
    phoneNumber: '',
    pic: null,
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }


  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      pic: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formValues.name)
    formData.append('CPR', formValues.CPR)
    formData.append('type', formValues.type)
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
    <div >
      <div >
        <form
          className="col"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 > Register page</h1>
          <div >
            <label htmlFor="name" >Full Name</label>
            <input
              className="input-wrapper"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter your Full Name"
              value={formValues.name}
              required
            />
          </div>

          <div>
            <label htmlFor="name">CPR Number</label>
            <input
               className="input-wrapper"
              onChange={handleChange}
              name="CPR"
              type="text"
              placeholder="Enter your CPR Number"
              value={formValues.CPR}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
               className="input-wrapper"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input
               className="input-wrapper"
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="Enter your Phone Number"
              value={formValues.phoneNumber}
              required
            />
          </div>

          <div>
            <label htmlFor="file" >
              Upload your personal photo
            </label>
            <input
               className="input-wrapper"
              id="file"
              type="file"
              accept="image/*"
              onChange={handlePicChange}
            />
          </div>

          <div >
            <label htmlFor="password">Password</label>
            <input
              className="input-wrapper"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input-wrapper"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>

          <input type="hidden" name="type" value={formValues.type} />

          <button
            onSubmit={handleSubmit}
            disabled={
              !formValues.CPR ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          className='Registerbtn'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
