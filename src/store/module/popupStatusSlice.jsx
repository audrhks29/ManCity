import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    selectedPlayer: null,
    popupOpen: false,
    popupMenu: 1
}
export const popupStatusSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        isSelectPlayer(state, action) {
            state.selectedPlayer = action.payload
        },
        togglePopup(state, action) {
            state.popupOpen = !state.popupOpen
        },
        onChangePopupMenu(state, action) {
            state.popupMenu = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const { isSelectPlayer, togglePopup, onChangePopupMenu } = popupStatusSlice.actions
export default popupStatusSlice.reducer