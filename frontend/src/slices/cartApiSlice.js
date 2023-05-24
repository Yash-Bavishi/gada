import { apiSlice } from "./apiSlice";

const CART_URL = '/api/cart'

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCart: builder.mutation({
            query: (data) => ({
                url: `${CART_URL}/add/${data.itemName}/${data.quantity}`,
                method: 'post',
                body: data
            })
        }),
        getCartItem: builder.query({
            query: () => `${CART_URL}`
        })
    })
})


export const { useAddCartMutation, useGetCartItemQuery } = cartApiSlice;