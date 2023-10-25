import { useState } from 'react'
import { SignInUser } from '../../../services/Auth'
import { useNavigate } from 'react-router'

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ CPR: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const playload = await SignInUser(formValues)
    setFormValues({ CPR: '', password: '' })
    setUser(playload)
    navigate('/slip')
  }

  return (
    <div >
      <div >
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="CPR">CPR</label>
            <input
              className="input-wrapper"
              onChange={handleChange}
              name="CPR"
              type="CPR"
              placeholder="Enter you CPR Number"
              value={formValues.CPR}
              required
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
          <button
            disabled={!formValues.CPR || !formValues.password}
            type="submit"
            className='Registerbtn'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
