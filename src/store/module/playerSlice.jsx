import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    playerData: [],
    selectedPlayer: [],
    loading: true
}
export const getPlayerData = createAsyncThunk(
    'player/getPlayerData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/d85765f175243e27d4a84a76f44f4d75/raw/f903d33088ebc424e1fb77ae424ff687d0df46de/playerData.json')
        return res.data
    }
)
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        onUp: (state, action) => {
            //action 값이 없으면 action은 안써도 되자만 state값은 꼭 써야함
            state.cnt += 1
        },
        onDown: (state, action) => {
            state.cnt -= 1
        },
        onReset: (state) => {
            state.cnt = 0
        }
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