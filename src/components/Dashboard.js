
import React,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate=useNavigate();
    useEffect(()=>{
   
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
