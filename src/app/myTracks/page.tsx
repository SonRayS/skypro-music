"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getFavoritesTracks } from "../components/api/getMyTrackList/getMyTrackList";
import { setAuthState } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { trackType } from "../components/types";

export default function MainTracks() {
    const pageTracks = "myTracks";
    const Favorite = true;
    const token = useAppSelector((state) => state.auth.userData.access);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [tracksData, setTracksData] = useState<trackType[]>([]);

    useEffect(() => {
        getFavoritesTracks(token)
            .then((data) => {
                setTracksData(data);
            })
            .catch((error) => {
                if (error.message === "401") {
                    dispatch(setAuthState(false));
                    router.push("/signin");
                } else {
                    alert(error.message);
                }
            });
    }, [dispatch, router, token]);

    return (
        <>
            <BodyGetTrack
                tracksData={tracksData}
                params={pageTracks}
                isFavorite={Favorite}
            />
        </>
    );
}
