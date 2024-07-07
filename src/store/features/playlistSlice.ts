import { trackType } from "@/app/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playlistStateType = {
    currentTrack: null | trackType;
};

const initialState: playlistStateType = {
    currentTrack: null,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<trackType>) => {
            /* STATE = status ACTION = setStatus */
            state.currentTrack = action.payload;
        },
    },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
