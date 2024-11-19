import React, { useState, useContext } from 'react'
import UserContext from './context/UserContext'

const Login = () => {

    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext((UserContext))

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    
  return (
    <div>
      <h1>Login component</h1>
      <input type="text"
      value={userName}
      onChange={(e) => setuserName(e.target.value)}
      placeholder='Username' />
      {" "}

      <input type="password"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
       placeholder='Password' />

       <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
