import { useState } from 'react'
import axios from 'axios'


const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    CPR: '',
    email: '',
    phoneNumber: '',
    picture: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/issues', formState)
    await RegisterUser({
      name: formValues.name,
      CPR: formValues.CPR,
      email: formValues.email,
      phoneNumber: formValues.phoneNumber,
      picture : formValues.picture ,
      password: formValues.password
    })
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
        <form className="col" onSubmit={handleSubmit}>

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
              name="phonenumber"
              type="number"
              placeholder="ُEnter your Phone Number"
              value={formValues.name}
              required
            />
          </div>

          <div>
        <label htmlFor="file" className="sr-only">
          Upload your personal photo
        </label>
        <input id="file" type="file" onChange={handleChange} />
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
          <button
            disabled={
              !formValues.CPR ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
