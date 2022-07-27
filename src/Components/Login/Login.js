import React, {useRef, useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sm:h-screen'>
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>Log in</h2>
            {error && <p className='text-center text-red-600'>{error}</p>}
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <span id="email">
                        <label className='sr-only'>Email</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' placeholder='Email address' ref={emailRef} required />
                    </span>
                    <span id="password">
                        <label className='sr-only'>Password</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' placeholder='Password' ref={passwordRef} required />
                    </span>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                        <label className='ml-2 block text-sm text-gray-200'>Remember me</label>
                    </div>
                    <div className='text-sm'>
                        <Link to='/forgot-password' className='font-medium text-indigo-600 hover:text-indigo-500'>Forgot Password?</Link>
                    </div>
                </div>
               
                <button disabled={loading} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>
                    Log in
                </button>
                   
                <div className='text-center text-gray-300 text-sm'>
                    Don't have an account yet? <Link to='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>Sign Up</Link>
                </div>
            </form>
           
        </div>
        
    </div>
        
  )
}
