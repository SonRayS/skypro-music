"use client";
import { useEffect } from "react";
import getTrackList from "../components/api/getTrackList/getTrackList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    setCurrentTrack,
    setFilterPlaylist,
} from "@/store/features/playlistSlice";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";

export default function MainTracks() {
    const dispatch = useAppDispatch();
    const track = useAppSelector((el) => el.playlist.playlist);

    useEffect(() => {
        getTrackList().then((response) => {
            dispatch(setCurrentTrack({ tracksData: response }));
            dispatch(setFilterPlaylist({ tracksData: response }));
        });
    }, [dispatch]);

    return (
        <>
            <BodyGetTrack tracksData={track} />
        </>
    );
}
