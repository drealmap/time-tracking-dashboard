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
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8y'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>Password Reset</h2>
            {error && <p className='text-center text-red-600'>{error}</p>}
            {message && <p className='text-center text-green-600'>{message}</p>}
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <span id="email" className='rounded-md shadow-sm -space-y-px'>
                    <label className='sr-only'>Email</label>
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' ref={emailRef} required placeholder='Email address' />
                </span>

                <button disabled={loading} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>
                    Reset password
                </button>
                <div className='text-sm'>
                    <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>Login</Link>
                </div>
                <div className='text-center text-gray-300 text-sm'>
                    Don't have an account yet? <Link to='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>Sign Up</Link>
                </div>
            </form>
        </div>   
    </div>
  )
}
