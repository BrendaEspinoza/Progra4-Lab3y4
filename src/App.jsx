import './App.css'
import Login from './Components/Login'
import {WelcomeWidget} from './Components/WelcomeWidget'
import { AuthContext } from './Context/AuthContext'
import { useContext } from 'react'


function App() {

  const { user } = useContext(AuthContext)

  return (
    <>
      { user ? <WelcomeWidget userName={user} /> : <Login/>}             
    </>
  )
}

export default App
