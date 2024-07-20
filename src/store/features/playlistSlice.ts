import { trackType } from "@/app/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playlistStateType = {
    /* Types */
    currentTrack: trackType | null;
    playlist: trackType[];
    filterList: trackType[];
    filtersName: string[];
    activeTitle: string | null;
    filterPlaylist: trackType[];
    shuffledPlaylist: trackType[];
    isShuffle: boolean;
    currentTrackIndex: number | null;
    isPlaying: boolean;
};

const initialState: playlistStateType = {
    /* first status point */
    currentTrack: null,
    playlist: [],
    filterList: [],
    filtersName: [],
    filterPlaylist: [],
    shuffledPlaylist: [],
    activeTitle: null,
    isShuffle: false,
    currentTrackIndex: null,
    isPlaying: false,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setActiveTitle: (
            state,
            action: PayloadAction<{
                activeTitle: string | null;
            }>
        ) => {
            state.activeTitle = action.payload.activeTitle;
        },
        setFilterList: (
            state,
            action: PayloadAction<{
                tracksFilters: trackType[];
                filtersName: string[];
            }>
        ) => {
            state.filterList = action.payload.tracksFilters;
            state.filtersName = action.payload.filtersName;
        },
        setFilterPlaylist: (
            state,
            action: PayloadAction<{
                tracksData: trackType[];
            }>
        ) => {
            state.filterPlaylist = action.payload.tracksData;
        },
        setCurrentTrack: (
            state,
            action: PayloadAction<{
                track: trackType | null;
                tracksData: trackType[];
            }>
        ) => {
            /* STATE = status ACTION = setStatus */
            state.currentTrack = action.payload.track;
            state.playlist = action.payload.tracksData;
            state.shuffledPlaylist = [...action.payload.tracksData].sort(
                () => 0.5 - Math.random()
            );
            state.currentTrackIndex = action.payload.tracksData.indexOf(
                action.payload.track!
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

            if (currentTrackIndex === -1) {
                return;
            }

            const nextTrack = currentTrackIndex + 1;

            if (nextTrack >= playlist.length) {
                state.currentTrack = playlist[0];
            } else {
                state.currentTrack = playlist[nextTrack];
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

            if (currentTrackIndex === 0) {
                return;
            }

            let previousTrack = currentTrackIndex - 1;

            if (previousTrack >= playlist.length) {
                state.currentTrack = playlist[0];
            } else {
                state.currentTrack = playlist[previousTrack];
            }
        },

        toggleShuffle: (state) => {
            state.isShuffle = !state.isShuffle;
        },

        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const {
    setActiveTitle,
    setFilterList,
    setFilterPlaylist,
    setCurrentTrack,
    setNextTrack,
    setPreviousTrack,
    setIsPlaying,
    toggleShuffle,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
