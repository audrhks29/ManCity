import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    playerData: [],
    position: ["FW", "MF", "DF", "GK"],
    loading: true
}
export const getPlayerData = createAsyncThunk(
    'player/getPlayerData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/d85765f175243e27d4a84a76f44f4d75/raw/9fcf4b7ab83500d1ef15c12d32726e822e8c170a/playerData.json')
        return res.data
    }
)
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlayerData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getPlayerData.fulfilled, (state, action) => {
                state.loading = false
                state.playerData = action.payload
            })
            .addCase(getPlayerData.rejected, (state, action) => {
                state.loading = true
            })
    }
})

export const { onUp, onDown, onReset } = playerSlice.actions
export default playerSlice.reducer