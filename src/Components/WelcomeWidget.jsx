import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export function WelcomeWidget() {
    const { user } = useContext(AuthContext)

    return (
        <>
            <h2>Welcome to our site {user.email}</h2>
        </>
    )
}