import  {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './slices/user/authSlice';
import apiSlice from './slices/user/apiSlice';
const userStore = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducer] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default userStore;