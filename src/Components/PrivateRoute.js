import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

export default function PrivateRoute({ Component }) {

  const { currentUser } = useAuth()
  return  currentUser ? Component : <Navigate replace to="/login" />
      
}
