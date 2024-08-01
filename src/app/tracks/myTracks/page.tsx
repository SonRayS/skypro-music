"use client";

import { useAppSelector } from "@/hooks";
import BodyGetTrack from "@/app/components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getFavoritesTracks } from "@/app/components/api/getMyTrackList/getMyTrackList";
import { trackType } from "@/app/components/types";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading/loading";
import useLogoutOnPageUnload from "@/app/components/authoCheckPage/autoCheckPage";

export default function MyTracks() {
    const pageTracks = "myTracks";
    const token = useAppSelector((state) => state.auth.userData?.access || "");
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const isFavorite = true;

    useLogoutOnPageUnload();

    const fetchTracks = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getFavoritesTracks(token);
            setTracksData(data);
        } catch (error) {
            console.error("Failed to fetch tracks", error);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            fetchTracks();
        } else {
            router.push("/signin");
        }
    }, [token, fetchTracks, router]);

    const handleTrackUpdate = useCallback(() => {
        fetchTracks();
    }, [fetchTracks]);

    return (
        <>
            {loading ? (
                <Loading isLoading={loading} />
            ) : (
                <BodyGetTrack
                    tracksData={tracksData}
                    params={pageTracks}
                    isFavorite={isFavorite}
                    onTrackUpdate={handleTrackUpdate}
                />
            )}
        </>
    );
}
