import apiSlice from "./apiSlice";

const USER_URL = '/api/user'

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'post',
                body: data
            }, console.log(data))
        })
    })
})

export const {useLoginMutation} = userApiSlice;
export default userApiSlice