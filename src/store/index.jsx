import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './module/playerSlice'
import popupReducer from './module/PopupStatusSlice';
export const store = configureStore({
    reducer: {
        playerR: playerReducer,
        popupR: popupReducer
    }
})