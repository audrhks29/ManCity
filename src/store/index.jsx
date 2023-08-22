import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './module/playerSlice'
export const store = configureStore({
    reducer: {
        playerR: playerReducer
    }
})