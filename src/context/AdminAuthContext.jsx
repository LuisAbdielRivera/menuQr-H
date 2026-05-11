import { createContext, useContext, useState } from 'react'

const AdminAuthContext = createContext()

export const useAdminAuth = () => useContext(AdminAuthContext)

export default function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const login = ({ email, password }) => {
    if (email.trim() && password.trim()) {
      setIsAdminLoggedIn(true)
    }
  }

  const logout = () => {
    setIsAdminLoggedIn(false)
  }

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}
