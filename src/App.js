import React from 'react';
import Card from './Components/Card/Card';
import Signup from './Components/SignUp/SignUp';
import Login from './Components/Login/Login'
import { AuthProvider } from "./Contexts/AuthContext"
import { AuthDataProvider } from './Contexts/DataContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'

function App() {
  return (
    <div className='h-screen bg-slate-900 sm:h-full'>
      
      <Router>
        <AuthProvider>
          <AuthDataProvider>
            <Routes>
              <Route path='/' element={<PrivateRoute Component={<Card />} />} />
              <Route path='update-profile' element={<PrivateRoute Component={<UpdateProfile />} />} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/forgot-password' element={<ForgotPassword/>} />
            </Routes>
          </AuthDataProvider>
        </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
