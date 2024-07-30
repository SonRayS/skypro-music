import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trackType, userType } from "@/app/components/types";
import { getFavoritesTracks } from "@/app/components/api/getMyTrackList/getMyTrackList";

export const getFavoriteTracks = createAsyncThunk(
    "playlist/getFavoriteTracks",
    async (access: string) => {
        const favoriteTracks = await getFavoritesTracks(access);
        return favoriteTracks;
    }
);

type playlistStateType = {
    currentTrack: trackType | null | undefined;
    playlist: trackType[];
    filterList: trackType[];
    filtersName: string[];
    filterPlaylist: trackType[];
    shuffledPlaylist: trackType[];
    activeTitle: null | string;
    isShuffle: boolean;
    currentTrackIndex: number | null;
    isPlaying: boolean;
    volume: number;
    currentTime: number;
    searchValue: string;
    isLiked: userType | boolean | undefined;
    likedTracks: trackType[];
};

const initialState: playlistStateType = {
    isLiked: {
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        refresh: "",
    },
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
    volume: 0.5,
    currentTime: 0,
    searchValue: "",
    likedTracks: [],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        resetSearchFilters: (
            state,
            action: PayloadAction<{ filterPlaylist: trackType[] }>
        ) => {
            state.searchValue = "";
            state.filterPlaylist = action.payload.filterPlaylist;
        },
        setActiveTitle: (
            state,
            action: PayloadAction<{ activeTitle: string | null }>
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
            action: PayloadAction<{ filterPlaylist: trackType[] }>
        ) => {
            state.filterPlaylist = action.payload.filterPlaylist;
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
            action: PayloadAction<{
                searchValue: string;
                filtersName: string[];
            }>
        ) => {
            const { searchValue, filtersName } = action.payload;
            state.searchValue = searchValue;
            state.filtersName = filtersName;
            state.filterList = state.filterPlaylist.filter(
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
        likeTrack: (state, action: PayloadAction<trackType>) => {
            if (
                !state.likedTracks.find(
                    (track) => track.id === action.payload.id
                )
            )
                state.likedTracks.push(action.payload);
        },
        dislike: (state, action: PayloadAction<trackType>) => {
            state.likedTracks = state.likedTracks.filter(
                (track) => track.id !== action.payload.id
            );
        },
        setLikedTracks: (state, action: PayloadAction<trackType[]>) => {
            state.likedTracks = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(
            getFavoriteTracks.fulfilled,
            (state, action: PayloadAction<trackType[]>) => {
                state.likedTracks = action.payload;
            }
        );
    },
});

export const {
    resetSearchFilters,
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
    likeTrack,
    dislike,
    setLikedTracks,
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;
