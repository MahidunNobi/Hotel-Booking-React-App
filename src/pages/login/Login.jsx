import { useState } from "react"
import { useAuthContext } from "../../Context/AuthContext"
import {useNavigate } from "react-router-dom"
import "./login.css"
import axios from "axios"


const Login = () => {
    const {loading, err, dispatch, lastLink} = useAuthContext()    
   
    const [credentials, setCredentials] = useState({
        username: null,
        password: null
    })

    const handleChange = async (e) => {
        setCredentials(prev=> {
            return {...prev, [e.target.name] : e.target.value}
        })       
    }

    const navigate = useNavigate()
    
    const handleLogin = async(e)=>{
        e.preventDefault()     
        navigate("/")
    }

  return (
    <div>
        <div className="container mx-auto px-6 py-6 flex justify-center h-[60vh] items-center">
            <form className='formContainer'>
                <h2 className="text-2xl mb-6"> Login</h2>
                <input 
                type="text"
                placeholder='Username'
                name="username"
                id="username"
                onChange={handleChange}
                />
                <input 
                type="password"
                placeholder='Password'
                name="password"
                id="password"
                onChange={handleChange}
                />
                { err && <p className="text-red-700">
                    {err.message}
                </p>}
                <button disabled={loading} onClick={handleLogin}> Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login