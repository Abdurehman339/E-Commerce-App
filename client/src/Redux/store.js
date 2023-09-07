import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({user: userReducer, product: productReducer}) 

export const store = configureStore({
    reducer: {
        rootReducer
    }
});
