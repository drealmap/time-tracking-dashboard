import React, {useRef, useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const Promises = [];
        if (emailRef.current.value !== currentUser.email) {
            Promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value !== currentUser.password) {
            Promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(Promises).then(() => {
            history('/')
        }).catch((err) => {
            console.log(err)
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

    }

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sm:h-screen'>
        <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>Profile update</h2>
            {error && <p className='text-center text-red-600'>{error}</p>}
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <span id="email">
                        <label className='sr-only'>New Email: </label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' ref={emailRef} required defaultValue={currentUser.email} />
                    </span>
                    <span id="password">
                        <label className='sr-only'>New Password</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' ref={passwordRef} placeholder='New Password' />
                    </span>
                    <span id="password-confirm">
                        <label className='sr-only'>New Password Confirmation</label>
                        <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-900 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' ref={passwordConfirmRef} placeholder='New Password Confirmation' />
                    </span>
                </div>
                
                <button disabled={loading}  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>
                    Update
                </button>
                <div className='text-center mt-2'>
                    <Link to='/' className='font-medium text-indigo-600 hover:text-indigo-500'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
        
  )
}
