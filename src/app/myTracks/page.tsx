"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { useCallback, useEffect, useState } from "react";
import { getFavoritesTracks } from "../components/api/getMyTrackList/getMyTrackList";
import { setAuthState } from "@/store/features/authSlice";
import { trackType } from "../components/types";
import { useRouter } from "next/navigation";

export default function MainTracks() {
    const pageTracks = "myTracks";
    const token = useAppSelector((state) => state.auth.userData.access);
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const getMyTracks = useCallback(() => {
        getFavoritesTracks(token)
            .then((data) => {
                setTracksData(data);
            })
            .catch((error) => {
                if (error.message === "401") {
                    dispatch(setAuthState(false));
                    router.push("/tracks");
                } else {
                    alert(error.message);
                }
            });
    }, [dispatch, token, router]);

    useEffect(() => {
        getMyTracks();
    }, [getMyTracks]);

    return (
        <>
            <BodyGetTrack tracksData={tracksData} params={pageTracks} />
        </>
    );
}
