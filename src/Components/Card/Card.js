import React, {useState} from 'react'
import './Card.css'
import '../../App.css'
import jeremy from '../../images/image-jeremy.png'
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom'
import Day from '../Day';
import Week from '../Week';
import Month from '../Month';



const Card = () => {

  const { logout, currentUser } = useAuth() 
  const [error, setError] = useState('')
  const history = useNavigate();

  const [dailystat, setDailystat] = useState(false);
  const [weeklystat, setWeeklystat] = useState(true);
  const [monthlystat, setMonthlystat] = useState(false);


  async function handleLogout() {
    setError('')

    try {
      await logout();
      history('/login')
      
    } catch {
      setError('Failed to log out')
    }
  }



  return (

    
    <div className='other_cards'>
        

      <div className='jeremy_card'>
        <div className='jeremy_main'>
          <img src={jeremy} alt='jeremy'/>
          <div className='headings'>
            <h5>Report for</h5>
            <h3>Jeremy Robson</h3>
          </div>
        </div>
        
        <span className='jeremy_buttons'>
          <button onClick={() => {
            setDailystat(true)
            setWeeklystat(false)
            setMonthlystat(false)}}>Daily</button>
          <button onClick={() => {
            setDailystat(false)
            setWeeklystat(true)
            setMonthlystat(false)}}>Weekly</button>
          <button onClick={() => {
            setDailystat(false)
            setWeeklystat(false)
            setMonthlystat(true)}}>Monthly</button>
        </span>
      </div>
  

      {weeklystat ? <Week /> : (monthlystat ? <Month /> : dailystat ? <Day /> : null) }

      <div className='w-100 text-center mt-2'>
        <button className='btn-link btn' onClick={handleLogout}>Log out</button>
      </div>

      {error && <p variant= 'danger'>{error}</p>}
      <strong>Email: </strong>{currentUser.email}

      <Link to ='/update-profile' className='btn btn-primary'>Update Profile</Link>

      
    </div>
  )
}

export default Card