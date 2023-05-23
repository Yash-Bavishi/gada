import React from 'react'
import { GiSpectacleLenses } from 'react-icons/gi'
function SignIn() {
  return (
		<div className="text-white flex flex-col items-center w-full">
			<div className="logo flex flex-row items-center gap-1 text-5xl">
				<GiSpectacleLenses size="75px" /> GADA
			</div>
			<div className="content flex flex-col py-5 px-3 gap-5 border-white rounded-3xl border-2">
				<h1 className='text-3xl'>Sign In</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Enter your email</label>
                <input type="email" className="bg-transparent border-2 border-white py-2 px-2 rounded-2xl" placeholder='Enter your email' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Enter your password</label>
                <input type="password" className="bg-transparent border-2 border-white py-2 px-2 rounded-2xl" placeholder='Enter your password' />
            </div>
            <input type="submit" value="Sign in" className='self-center py-2 px-3 border-2 border-white rounded-2xl w-60' />
            </div>
			<p>Don't have an account ? <span className='text-cyan-800'>Sign Up</span></p>
        </div>
  )
}

export default SignIn