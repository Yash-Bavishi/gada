import { GiSpectacleLenses } from 'react-icons/gi'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import { useRegisterMutation } from '../slices/userApiSlice'

function SignUp() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const dispatch = useDispatch()
	const {userInfo} = useSelector((state) => state.auth)
	const [register] = useRegisterMutation()
	const registerHandler = async (e) => {
		e.preventDefault()
		try {
			const res = await register({name, email, password, confirmPassword}).unwrap()
			dispatch(setCredentials({...res}))
		} catch (error) {
			console.log(error)	
		}
	}

	return (
		<div className="text-white flex flex-col justify-center items-center w-full">
			<div className="logo flex flex-row items-center gap-1 text-5xl">
				<GiSpectacleLenses size="75px" /> GADA
			</div>
			<div className="content flex flex-col py-5 px-3 gap-5 border-white rounded-3xl border-2">
				<h1 className='text-3xl'>Create Account</h1>
				<form action="" className='flex flex-col gap-5 '>
					<div>
						<label htmlFor="name">You name</label><br />
						<input type="text" placeholder='First and last name' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' onChange={(e) => setName(e.target.value)}/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="mobile">Mobile Number</label>
						<div className='flex flex-row gap-3 justify-center items-center'>
							<select id="number" name="" className='bg-transparent'>
								<option value="India" className='bg-bgColor'>+91 India</option>
								<option value="America" className='bg-bgColor'>+1 America</option>
								<option value="UK" className='bg-bgColor'>+44 UK</option>
							</select>
							<input type="number" placeholder='Mobile Number' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' />
						</div>
					</div>
					<div>
						<label htmlFor="Email">Enter your Email</label><br />
						<input type="email" placeholder='Enter email' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' onChange={(e) => setEmail(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="password">Enter your password</label><br />
						<input type="password" placeholder='Enter password' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' onChange={(e) => setPassword(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm Password</label><br />
						<input type="password" placeholder='Enter confirm password' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' onChange={(e) => setConfirmPassword(e.target.value)}/>
					</div>
					<input type="submit" className='border-2 border-white self-center w-56' onClick={registerHandler}/>
				</form>
			</div>
			<p>Already have an account ? <span className='text-cyan-800'>Sign In</span></p>
		</div>
	)
}

export default SignUp
