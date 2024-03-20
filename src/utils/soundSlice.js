import { createSlice } from "@reduxjs/toolkit";

const soundSlice = createSlice({
    name: 'sound',
    initialState: {
        setSoundSlice: false,
    },
    reducers: {
        toggleSound: (state) => {
            state.setSoundSlice = !state.setSoundSlice;
        }
    }
})

export const { toggleSound } = soundSlice.actions;

export default soundSlice.reducer;