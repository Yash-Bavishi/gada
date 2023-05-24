import { apiSlice} from './apiSlice';

const SHOP_URL = '/api/shop'

export const shopApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => `${SHOP_URL}`
		})
	})
})

export const {useGetPostsQuery} = shopApiSlice;
