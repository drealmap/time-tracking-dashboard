import React, {useRef, useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)

    }

  return (
    <>
        <div>
            <div className='body'>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <p variant= 'danger'>{error}</p>}
                {message && <p variant= 'success'>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <span id="email">
                        <label>Email</label>
                        <input type='email' ref={emailRef} required />
                    </span>
                   
                    <button disabled={loading} className='w-100' type='submit'>
                        Reset password
                    </button>
                </form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
        <div className='w-100 text-center mt-2'>
            Don't have an account yet? <Link to='/signup'>Sign Up</Link>
        </div>
    </>
  )
}
