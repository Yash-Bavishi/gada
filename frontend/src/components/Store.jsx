import Item from './Item';
import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../slices/shopApiSlice';
import {Link} from 'react-router-dom';
function Store() {

	const {data, isError, isLoading} = useGetPostsQuery()
	return (
		<div className="Store flex flex-row flex-wrap gap-5">
			{isLoading ? 
				<div>Loading</div> : 
				data.items.map((element) => 
					<Link to={'/item/'+element.name} key={element._id}><Item dr={element} key={element._id} /></Link>
			)}
		</div>
	)
}

export default Store
