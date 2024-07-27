import { trackType } from "@/app/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playlistStateType = {
    currentTrack: trackType | null | undefined;
    playlist: trackType[];
    filterList: trackType[];
    filtersName: string[];
    activeTitle: string | null;
    filterPlaylist: trackType[];
    shuffledPlaylist: trackType[];
    isShuffle: boolean;
    currentTrackIndex: number | null;
    isPlaying: boolean;
    volume: number;
    currentTime: number;
    searchValue: string;
};

const initialState: playlistStateType = {
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
    volume: 0.5, // Начальное значение громкости
    currentTime: 0,
    searchValue: "", // Начальное значение поискового запроса
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
                track?: trackType | null;
                tracksData: trackType[];
            }>
        ) => {
            state.currentTrack = action.payload.track;
            state.playlist = action.payload.tracksData;
            state.shuffledPlaylist = [...action.payload.tracksData].sort(
                () => 0.5 - Math.random()
            );
            state.currentTrackIndex = action.payload.tracksData.indexOf(
                action.payload.track!
            );
            state.isPlaying = true;
        },
        setNextTrack: (state) => {
            const playlist = state.isShuffle
                ? state.shuffledPlaylist
                : state.playlist;
            const currentTrackIndex = playlist.findIndex(
                (track) => track.id === state.currentTrack?.id
            );
            if (currentTrackIndex !== -1) {
                const nextTrackIndex =
                    (currentTrackIndex + 1) % playlist.length;
                state.currentTrack = playlist[nextTrackIndex];
                state.currentTrackIndex = nextTrackIndex;
            }
        },
        setPreviousTrack: (state) => {
            const playlist = state.isShuffle
                ? state.shuffledPlaylist
                : state.playlist;
            const currentTrackIndex = playlist.findIndex(
                (track) => track.id === state.currentTrack?.id
            );
            if (currentTrackIndex !== -1) {
                const previousTrackIndex =
                    (currentTrackIndex - 1 + playlist.length) % playlist.length;
                state.currentTrack = playlist[previousTrackIndex];
                state.currentTrackIndex = previousTrackIndex;
            }
        },

        toggleShuffle: (state) => {
            state.isShuffle = !state.isShuffle;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload;
        },
        setSearchFilters: (
            state,
            action: PayloadAction<{ searchValue: string }>
        ) => {
            const { searchValue } = action.payload;
            state.searchValue = searchValue;
            state.filterPlaylist = state.playlist.filter(
                (track) =>
                    track.album
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    track.author
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    track.genre
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
            );
        },
    },
});

export const {
    setActiveTitle,
    setFilterList,
    setFilterPlaylist,
    setSearchFilters,
    setCurrentTrack,
    setNextTrack,
    setPreviousTrack,
    setIsPlaying,
    toggleShuffle,
    setVolume,
    setCurrentTime,
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;
