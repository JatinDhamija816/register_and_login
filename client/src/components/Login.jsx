import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/login', { email, password })
            .then((response) => { setUser([...user, response.data]) })
            .catch(err => console.log(err))
        setEmail('')
        setPassword('')
        navigate('/')
    }
    return (
        <>
            <div className='container'>
                <p className='heading'>Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Register</button>
                </form>
                <p>New User, Register <Link to='/register'>Here</Link></p>
            </div>
        </>
    )
}
export default Login
