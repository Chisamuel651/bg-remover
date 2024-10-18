import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to='/'>
        <img className='w-32 sm:w-44' src={assets.logo} alt="remove it" />
      </Link>

      {
        isSignedIn?<div>
          <UserButton />
        </div>
        :<button onClick={()=>openSignIn({})} className='items-center flex bg-zinc-800 text-white gap-4 py-2 px-4 sm:px-8 sm:py-3 text-sm rounded-full'>
          get started 
          <img className='w-3 sm:w-4' src={assets.arrow_icon} alt='arrow' />
        </button>
      }
    </div>
  )
}

export default Navbar
