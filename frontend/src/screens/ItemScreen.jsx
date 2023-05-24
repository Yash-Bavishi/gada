import tv from '../assets/image.jpg'
import Header from '../components/Header'
import Links from '../components/Links'
import { useGetItemQuery } from '../slices/shopApiSlice'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAddCartMutation } from '../slices/cartApiSlice'
function ItemScreen() {

	const  { itemName }  = useParams();
	const {data, isError, isLoading} = useGetItemQuery(itemName)	
	const [quantity, setQuantity] = useState(1)
	const dispatch = useDispatch();
	const [addCart ] = useAddCartMutation()
	const cartHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await addCart({itemName: data.name, quantity})
			console.log(res)
		} catch (err) {
			console.log(err);
		}

	}


	return (
		
		<div className='mx-20 md:mx-20 sm:mx-0'>
			{isLoading ? 
				<div className='text-white text-center'>Loading</div>:
				<div>
				<Header />
				<hr />
				<div className='flex gap-20 mx-8 my-10'>
					<Links className="" />
					<div className="flex gap-2 py-2 px-2 border-white border-2">
						<img src={tv} alt="A TV should come here" className='h-32' />
						<div className="info text-white ">
							<h4>{data.name}</h4>
							<h4>STARS</h4>
							<h3>{data.amount}</h3>
							<p>Save Exra with No Cost Emi</p>
							<p>JETHA Verified</p>
							<select onChange={(e) => setQuantity(e.target.value)} name="quantity" id="quantity" className='bg-bgColor border-1 border-white'>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10+">+10</option>
							</select> Quantity
						</div>
					</div>
				</div>
				<button className='absolute bottom-10 right-10 text-white border-2 border-white rounded-2xl py-4 px-2' onClick={cartHandler}>Add to cart</button>
			</div>
			}
		</div>
	
	)
}

export default ItemScreen
