import Item from './Item';
import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../slices/shopApiSlice';

function Store() {

	useEffect(() => {

		const { data } = useGetPostsQuery()
		console.log(data)

	}, [data])


	return (
		<div className="Store flex flex-row flex-wrap gap-5">
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	)
}

export default Store
