import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/register', { username, email, password })
            .then((response) => { setUser([...user, response.data]) })
            .catch(err => console.log(err))
        setUsername('')
        setEmail('')
        setPassword('')
        navigate('/login')
    }
    return (
        <>
            <div className='container'>
                <p className='heading'>Register</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Register</button>
                </form>
                <p>Already Register, Login <Link to='/login'>Here</Link></p>
            </div>
        </>
    )
}

export default Register
