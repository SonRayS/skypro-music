import { trackType } from "@/app/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playlistStateType = {
    /* Types */
    currentTrack: trackType | null;
    playlist: trackType[];
    shuffledPlaylist: trackType[];
    isShuffle: boolean;
};

const initialState: playlistStateType = {
    /* first status point */
    currentTrack: null,
    playlist: [],
    shuffledPlaylist: [],
    isShuffle: false,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (
            state,
            action: PayloadAction<{ track: trackType; tracksData: trackType[] }>
        ) => {
            /* STATE = status ACTION = setStatus */
            state.currentTrack = action.payload.track;
            state.playlist = action.payload.tracksData;
            state.shuffledPlaylist = [...action.payload.tracksData].sort(
                () => 0.5 - Math.random()
            );
        },

        setNextTrack: (state) => {
            /* STATE = status ACTION = setStatus */
            const playlist = state.isShuffle
                ? state.shuffledPlaylist
                : state.playlist;

            const currentTrackIndex = playlist.findIndex(
                (track) => track.id === state.currentTrack?.id
            );

            const nextTrack = playlist[currentTrackIndex + 1];

            if (nextTrack) {
                state.currentTrack === nextTrack;
            }
        },

        setPreviousTrack: (state) => {
            /* STATE = status ACTION = setStatus */
            const playlist = state.isShuffle
                ? state.shuffledPlaylist
                : state.playlist;

            const currentTrackIndex = playlist.findIndex(
                (track) => track.id === state.currentTrack?.id
            );

            let previousTrack;

            if (currentTrackIndex === 0) {
                previousTrack = playlist[currentTrackIndex];
            } else {
                previousTrack = playlist[currentTrackIndex - 1];
            }

            if (previousTrack) {
                state.currentTrack === previousTrack;
            }
        },

        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            state.isShuffle === action.payload;
        },
    },
});

export const { setCurrentTrack, setNextTrack, setPreviousTrack, setIsShuffle } =
    playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
