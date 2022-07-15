import React, {useState} from 'react'
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

    <div className='m-auto w-10/12'>
      <div className='flex text-gray-300 justify-between py-4 sm:text-sm'>
        
        <div className='font-medium text-indigo-600 hover:text-indigo-500'>
          <button onClick={handleLogout}>Log out</button>
        </div>
    
        <div>
          {error && <p className='text-red-600 text-center'>{error}</p>}
          <strong>Email: </strong>{currentUser.email}
        </div>
  
        <Link to ='/update-profile' className='font-medium text-indigo-600 hover:text-indigo-500'>Update Profile</Link>
      </div>


      <div className='grid grid-cols-4 gap-5 justify-center items-center my-7 mx-auto w-[82%] sm:block'>
        <div className='row-span-2 bg-[#1c1f4a] rounded-[20px] sm:mt-[20px]'>
          <div className='block pt-px pb-[75px] bg-[#5847eb] rounded-[20px] sm:flex sm:pb-[20px]'>
            <img className='border-solid border-4 rounded-full w-1/5 mx-9 mb-0 mt-9 sm:m-[25px]' src={jeremy} alt='jeremy'/>
            <div className='ml-7 relative top-8 sm:mt-[17px] sm:top-0 sm:ml-0'>
              <h5 className='text-[#bdc1ff] text-sm font-light mb-0 mt-6'>Report for</h5>
              <h3 className='text-white text-4xl tracking-[1px] mt-[7px] sm:text-[20px]'>Jeremy Robson</h3>
            </div>
          </div>
          
          <span className='m-0 sm:flex sm:justify-between sm:my-[15px] sm:mx-[23px] sm:pb-[20px] sm:text-sm'>
            <button className='my-[16px] mx-[20px] bg-inherit text-[#6f76c8] text-lg block hover:text-white hover:cursor-pointer focus:text-white sm:text-sm sm:m-0' onClick={() => {
              setDailystat(true)
              setWeeklystat(false)
              setMonthlystat(false)}}>Daily
            </button>
            <button className='my-[16px] mx-[20px] bg-inherit text-[#6f76c8] text-lg block hover:text-white hover:cursor-pointer focus:text-white sm:text-sm sm:m-0' onClick={() => {
              setDailystat(false)
              setWeeklystat(true)
              setMonthlystat(false)}}>Weekly
            </button>
            <button className='my-[16px] mx-[20px] bg-inherit text-[#6f76c8] text-lg hover:text-white hover:cursor-pointer focus:text-white sm:text-sm sm:m-0' onClick={() => {
              setDailystat(false)
              setWeeklystat(false)
              setMonthlystat(true)}}>Monthly
            </button>
          </span>
        </div>
    
    
        {weeklystat ? <Week /> : (monthlystat ? <Month /> : dailystat ? <Day /> : null) }
    
          
      </div>
    </div>
    
  )
}

export default Card