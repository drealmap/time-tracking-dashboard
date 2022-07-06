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
    <>
        <div>
            <div className='body'>
                <h2 className='text-center mb-4'>Profile update</h2>
                {error && <p variant= 'danger'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <span id="email">
                        <label>New Email</label>
                        <input type='email' ref={emailRef} required defaultValue={currentUser.email} />
                    </span>
                    <span id="password">
                        <label>New Password</label>
                        <input type='password' ref={passwordRef} placeholder='Leave blank to keep the same password' />
                    </span>
                    <span id="password-confirm">
                        <label>New Password Confirmation</label>
                        <input type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same password' />
                    </span>
                    <button disabled={loading} className='w-100' type='submit'>
                        Update
                    </button>
                </form>
            </div>
        </div>
        <div className='w-100 text-center mt-2'>
            <Link to='/'>Cancel</Link>
        </div>
    </>
  )
}
