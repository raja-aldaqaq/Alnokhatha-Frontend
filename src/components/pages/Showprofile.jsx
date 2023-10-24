import { useState } from 'react'
import Client from '../../../services/api'

const UpdateProfile = ({ user }) => {
  // const [formValues, setformValues] = useState({})
  const [formValues, setFormValues] = useState({
    name: user.name,
    CPR: user.CPR,
    email: user.email,
    phoneNumber: user.phoneNumber
    // pic: null,
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
    const response = await Client.put(
      `/auth/EditProfile/${user._id}`,
      formValues
    )
    console.log(response)
  }

  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      pic: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append('name', value.name)
  //   formData.append('CPR', value.CPR)
  //   formData.append('email', value.email)
  //   formData.append('phoneNumber', value.phoneNumber)
  //   formData.append('pic', value.pic)
  //   formData.append('password', value.password)
  // }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form
          className="col"
          onSubmit={handleUpdate}
          encType="multipart/form-data"
        >
          <h1> Update</h1>

          <img src={`http://localhost:3001/${user.pic}`}></img>
          {/* <img src="/public/upload" value={formValues.pic} */}
          {/* style=" width: 200px; height: auto ;" for="files"></img> */}

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

          {/* <div>
            <label htmlFor="file" className="sr-only">
              Upload your personal photo
            </label>
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={handlePicChange}
            />
          </div> */}
          {/* 
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
          </div> */}
          <button
            type="submit"
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
