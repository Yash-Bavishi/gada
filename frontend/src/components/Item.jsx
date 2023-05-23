import tv from '../assets/image.jpg'
function Item() {
	return (
		<div className="flex gap-2 py-2 px-2 border-white border-2">
			<img src={tv} alt="A TV should come here" className='h-32' />
			<div className="info text-white ">
				<h4>Name</h4>
				<h4>STARS</h4>
				<h3>PRICE</h3>
				<p>Save Exra with No Cost Emi</p>
				<p>JETHA Verified</p>
			</div>
		</div>
	)
}

export default Item
