import Header from "../components/Header"
import Links from "../components/Links"
import Store from "../components/Store"
function HomeScreen() {
	return (
		<div className='mx-20 md:mx-20 sm:mx-0'>
			<Header />
			<hr />
			<div className='flex gap-20 mx-8 my-10'>
				<Links className="" />
				<Store />
			</div>
		</div>
	)
}

export default HomeScreen
