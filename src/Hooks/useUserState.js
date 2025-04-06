import {useState} from 'react'
import {useRef} from 'react'

export  function useUserState() {
    const [error, setError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef('')
    
   
    const login = (email, password) => {
        // Fake login check
        if (email === "admin" && password === "1234") {        
            return true;
        }
            return false;
    };


    return { error, emailRef, passwordRef, login , setError };
}