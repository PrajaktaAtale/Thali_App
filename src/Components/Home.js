import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  
  return (
    <div className='home'>
        <h1>Khana Express</h1>
        <h2>Explore a best food from our menu</h2>
    </div>
  )
}

export default Home