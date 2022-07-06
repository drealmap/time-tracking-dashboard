import React, {useRef, useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history('/')
        } catch {
            setError('Failed to sign in')
        }

        setLoading(false)

    }

  return (
    <>
        <div>
            <div className='body'>
                <h2 className='text-center mb-4'>Log in</h2>
                {error && <p variant= 'danger'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <span id="email">
                        <label className='form-label'>Email</label>
                        <input className='form-control' type='email' ref={emailRef} required />
                    </span>
                    <span id="password">
                        <label>Password</label>
                        <input className='form-control' type='password' ref={passwordRef} required />
                    </span>
                    <button disabled={loading} className='wt-100 mt-3' type='submit'>
                        Log in
                    </button>
                </form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
            </div>
        </div>
        <div className='w-100 text-center mt-2'>
            Don't have an account yet? <Link to='/signup'>Sign Up</Link>
        </div>
    </>
  )
}
