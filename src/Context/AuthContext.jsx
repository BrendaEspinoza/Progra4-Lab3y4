
// 1. Create a new context
import { createContext } from 'react'
import { useState } from 'react'
import { useUserState } from '../Hooks/useUserState'

export const AuthContext = createContext()

// 2. Create a Provider para compartir el estado del usuario
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const { login } = useUserState();

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}