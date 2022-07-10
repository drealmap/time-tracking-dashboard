import React from 'react';
import './App.css';
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
    <div className='App' 
      style={{minHeight: '100vh'}}>
      <div className='w-100' style={{maxWidth: '400px'}}>
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
    </div>
  );
}

export default App;
