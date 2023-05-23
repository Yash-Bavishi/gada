import {React, useInsertionEffect, useState} from 'react'
import { GiSpectacleLenses } from 'react-icons/gi'
import { useSelector, useDispatch} from 'react-redux'
import {setCredentials} from '../slices/authSlice'
import { useLoginMutation } from '../slices/userApiSlice'
function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {useInfo}  = useSelector((state) => state.auth)
    const [login] = useLoginMutation()
    const loginHandler = async (e) => {
        try {
            console.log(login)
            const res = await login({email, password}).unwrap() 
            dispatch(setCredentials({...res}))
        } catch (error) {
           console.log(error) 
        }
    }


  return (
		<div className="text-white flex flex-col items-center w-full">
			<div className="logo flex flex-row items-center gap-1 text-5xl">
				<GiSpectacleLenses size="75px" /> GADA
			</div>
			<div className="content flex flex-col py-5 px-3 gap-5 border-white rounded-3xl border-2">
				<h1 className='text-3xl'>Sign In</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Enter your email</label>
                <input type="email" className="bg-transparent border-2 border-white py-2 px-2 rounded-2xl" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Enter your password</label>
                <input type="password" className="bg-transparent border-2 border-white py-2 px-2 rounded-2xl" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Sign in" className='self-center py-2 px-3 border-2 border-white rounded-2xl w-60' onClick={loginHandler}/>
            </div>
			<p>Don't have an account ? <span className='text-cyan-800'>Sign Up</span></p>
        </div>
  )
}

export default SignIn