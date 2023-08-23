import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    selectedPlayer: null,
    popupOpen: false
}
export const popupStatusSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        isSelectPlayer(state, action) {
            state.selectedPlayer = action.payload
            console.log(action.payload);
        },
        isPopupOpen(state, action) {
            state.popupOpen = !state.popupOpen
            console.log(state.popupOpen);
        }
    },
    extraReducers: (builder) => {

    }
})

export const { isSelectPlayer, isPopupOpen } = popupStatusSlice.actions
export default popupStatusSlice.reducer