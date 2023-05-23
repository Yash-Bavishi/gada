import { GiSpectacleLenses } from 'react-icons/gi'
function SignUp() {
	return (
		<div className="text-white flex flex-col justify-center items-center w-full">
			<div className="logo flex flex-row items-center gap-1 text-5xl">
				<GiSpectacleLenses size="75px" /> GADA
			</div>
			<div className="content flex flex-col py-5 px-3 gap-3 border-white rounded-3xl border-1">
				<h1 className='text-3xl'>Create Account</h1>
				<form action="" className='flex flex-col gap-2 '>
					<div>
						<label htmlFor="name">You name</label><br />
						<input type="text" placeholder='First and last name' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' />
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="name">Mobile Number</label>
						<div className='flex flex-row gap-3 justify-center items-center'>
							<select id="number" name="" className='bg-transparent'>
								<option value="india" className='bg-black'>+91 india</option>
								<option value="america">+1 America</option>
								<option value="uk">+44 Uk</option>
							</select>
							<input type="text" placeholder='First and last name' className='bg-transparent border-white border-2 py-1 px-1 rounded-1xl' />
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp
