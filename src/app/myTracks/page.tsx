"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getFavoritesTracks } from "../components/api/getMyTrackList/getMyTrackList";
import { setAuthState } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import {
    setCurrentTrack,
    setFilterPlaylist,
} from "@/store/features/playlistSlice";

export default function MainTracks() {
    const pageTracks = "myTracks";
    const Favorite = true;
    const token = useAppSelector((state) => state.auth.userData.access);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const track = useAppSelector((el) => el.playlist.playlist);

    getFavoritesTracks(token)
        .then((data) => {
            dispatch(setCurrentTrack({ tracksData: data }));
            dispatch(setFilterPlaylist({ tracksData: data }));
        })
        .catch((error) => {
            if (error.message === "401") {
                dispatch(setAuthState(false));
                router.push("/tracks");
            } else {
                alert(error.message);
            }
        });

    return (
        <>
            <BodyGetTrack
                tracksData={track}
                params={pageTracks}
                isFavorite={Favorite}
            />
        </>
    );
}
