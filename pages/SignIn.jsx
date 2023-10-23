import { useState } from 'react'
import { SignInUser } from '../services/Auth'


const SignIn = ({ setUser }) => {
  const [formValues, setFormValues] = useState({ CPR: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const playload = await SignInUser(formValues)
    setFormValues({ CPR: '', password: '' })
    setUser(playload)
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="CPR">CPR</label>
            <input
              onChange={handleChange}
              name="CPR"
              type="CPR"
              placeholder="Enter you CPR Number"
              value={formValues.CPR}
              required
            />
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
          <button disabled={!formValues.CPR || !formValues.password} type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
