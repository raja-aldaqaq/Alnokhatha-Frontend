import { useState } from 'react'
import Client from '../../../services/api'
import { useNavigate } from 'react-router'

const UpdateProfile = ({ user, setUser }) => {
  let navigate = useNavigate()
  // const [formValues, setformValues] = useState({})
  const [formValues, setFormValues] = useState({
    name: user.name,
    CPR: user.CPR,
    email: user.email,
    phoneNumber: user.phoneNumber,
    pic: null
  })

  console.log(user.pic)
  user.pic = user.pic.replace('public', '')
  console.log(user.pic)

  const handleChange = (e) => {
    const attribute = e.target.name
    const value = e.target.value

    const currentNewForm = { ...formValues }

    currentNewForm[attribute] = value
    console.log(currentNewForm)
    setFormValues(currentNewForm)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formValues.name)
    formData.append('CPR', formValues.CPR)
    formData.append('email', formValues.email)
    formData.append('phoneNumber', formValues.phoneNumber)
    if (formValues.pic) {
      formData.append('pic', formValues.pic)
    }

    // setFormValues({
    //   name: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    // })

    const response = await Client.post(
      `/auth/EditProfile/${user._id}`,
      formData
    )
    setUser(response.data)
    navigate('/Show')
  }

  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      pic: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  return (
    <div className="card-container">
      <div>
        <form
     className='zanoob'
          onSubmit={handleUpdate}
          encType="multipart/form-data"
        >
          <h1> Update</h1>

          <img
            className="round "
            src={`http://localhost:3001/${user.pic}`}
          ></img>
          <div>
            <label htmlFor="file" className="sr-only">
              change your profile picture
            </label>
            <input
              name="pic"
              id="file"
              type="file"
              accept="image/*"
              onChange={handlePicChange}
            />
          </div>

          <div >
            <label htmlFor="name">Full Name</label>
            <input
             className="input-wrapper"
              onChange={handleChange}
              name="name"
              type="text"
              // placeholder="ُEnter your Full Name"
              // placeholder={formValues.name}
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
              placeholder="ُEnter your CPR Number"
              value={formValues.CPR}
              required
            />
          </div>

          <div >
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
          <div >
            <label htmlFor="name">Phone Number</label>
            <input
              className="input-wrapper"
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="ُEnter your Phone Number"
              value={formValues.phoneNumber}
              required
            />
          </div>

          <button className="primary" type="submit">
            {' '}
            update{' '}
          </button>
        </form>
      </div>
    </div>
  )
}
export default UpdateProfile
