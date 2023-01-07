import { useState, createContext } from 'react'
import { login as userLogin, logOut as userLogout, getUser } from './utils'

const UserProvider = ({ children }) => {
  const UserContext = createContext(null)
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>
}

export default UserProvider
