import {apiSlice} from './apiSlice'

const USER_URL = '/api/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'post',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/auth`,
                method: 'post',
                body: data
            })
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = userApiSlice;