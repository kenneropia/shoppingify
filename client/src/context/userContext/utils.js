import { add, getTime } from 'date-fns'
import API from '../../utils/API'

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user || Date.now() > user.jwt_expired_at) {
    return null
  } else if (user) {
    return user
  }
}
const loginUser = async (loginData) => {
  const data = await API.post('/user/login', loginData)

  const {
    data: {
      user: { username, email, id },
    },
  } = data

  let user = {
    username,
    id,
    email,
    token: data.token,
    jwt_created_at: Date.now(),
    jwt_expired_at: getTime(add(Date.now(), { days: 29 })),
  }

  localStorage.setItem('user', JSON.stringify(user))
  return user
}
export const signup = async (signinData) => {
  let {
    data: {
      data: { user },
    },
  } = await API.post('/user/signup', signinData)

  return user
}
/**
 * Assign the project to an employee.
 * @param {Object} loginData - Objetc passed into the func
 * @param {string} loginData.email - mail of the user
 * @param {string} loginData.password - password of the user
 */
export const login = async (loginData) => {
  let user = await loginUser(loginData)
  return user
}

export const logOut = () => localStorage.removeItem('user')
