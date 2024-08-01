import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[60px] text-center mt-16'>
            <span className='text-[#f56551]'>Discover your Future:</span><br/>
             Personalized Learning Path Website</h1>
             <p className='text-xl text-gray-500 text-center'>Your Personal Lerning path planner with you today and also in the future</p>
             <Link to={'/create-profile'}>
                <Button>Get Started, It's Free</Button>
             </Link>
             
    </div>
  )
}

export default Hero