"use client";

import { getFavoritesTracks } from "../api/getMyTrackList/getMyTrackList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuthState } from "@/store/features/authSlice";
import { trackType } from "../types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BodyGetTrack from "../body/bodyMainComponent/bodyGetTrack/bodyGetTrack";

export default function MyPlaylist() {
    const token = useAppSelector((state) => state.auth.userData?.access);
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!token) {
            console.log("no token");
            router.push("/signin");
            return;
        }

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
            <BodyGetTrack tracksData={tracksData} isFavorite={true} />
        </>
    );
}
