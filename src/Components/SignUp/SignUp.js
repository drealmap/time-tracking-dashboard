import React, {useRef, useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history('/')
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)

    }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>Sign up</h2>
            {error && <p className='text-center text-red-600'>{error}</p>}
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <span id="email">
                        <label className='sr-only'>Email</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' ref={emailRef} required placeholder='Email' />
                    </span>
                    <span id="password">
                        <label className='sr-only'>Password</label>
                        <input placeholder='Password' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' ref={passwordRef} required />
                    </span>
                    <span id="password-confirm">
                        <label className='sr-only'>Password Confirmation</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' ref={passwordConfirmRef} required placeholder='Password Confirmation' />
                    </span>
                </div>
               
                
                <button disabled={loading} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>
                    Sign Up
                </button>
                <div className='text-center text-gray-300 text-sm'>
                    Already have an account? <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>Log in</Link>
                </div>
            </form>
        </div>
    </div>
    
  )
}
