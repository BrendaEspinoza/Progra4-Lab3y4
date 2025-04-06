
import { useState, useRef } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
import { useUserState } from '../Hooks/useUserState'


export default function Login() {

    const { setUser } = useContext(AuthContext)
    const { login } = useUserState()
    const emailRef = useRef()
    const passwordRef = useRef('')
    const [error, setError] = useState('')



    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if (!isSuccess) {
            setError("Credenciales incorrectas");
        }
        else {
            setUser(email)
        }
    }


    return (
        <>
            <h2>Login</h2>
            <div>
                <input
                    type="email"
                    placeholder='Correo'
                    ref={emailRef}
                />
                <br />
                <input
                    type="password"
                    placeholder='Contraseña'
                    ref={passwordRef}
                />
                <br />
                <button onClick={handleLogin}>Ingresar</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>
    )
}