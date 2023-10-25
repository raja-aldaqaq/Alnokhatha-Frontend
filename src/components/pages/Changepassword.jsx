import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UpdatePassword } from '../../../services/Auth'

const ChangePassword = ({ user }) => {
  let navigate = useNavigate()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [error, setError] = useState('')
  console.log('Current password =', currentPassword)
  console.log('new password =', newPassword)

  const handleUpdatePassword = async (e) => {
    console.log('..................')
    e.preventDefault()
    if (newPassword !== confirmNewPassword) {
      console.log('Not matched')
      setError('password must match.')
      return
    } else {
      console.log('Matched')
      console.log(user._id)
      const response = await UpdatePassword(
        currentPassword,
        newPassword,
        user._id
      ).then((response) => {
        console.log('Password updated successfully')
      })
      navigate('/SignIn').catch((error) => {
        console.error('Password update failed:', error)
      })
      setError('')
      setNewPassword('')
      setCurrentPassword('')
      setConfirmNewPassword('')
    }
  }
  return (
    <div>
      <div className="passwordChange">
        <label>Current Password:</label>
        <form onSubmit={handleUpdatePassword}>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button>Update Password</button>
        </form>
      </div>
    </div>
  )
}
export default ChangePassword
