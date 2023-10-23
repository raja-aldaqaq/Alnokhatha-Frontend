import Client from './api'



export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateUser = async (userData, user_id) => {
  try {
    const response = await Client.put(`auth/Showprofile/${user_id}`, userData)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}
