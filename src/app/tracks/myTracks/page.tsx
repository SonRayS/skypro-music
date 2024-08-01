"use client";

import { useAppSelector } from "@/hooks";
import BodyGetTrack from "@/app/components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getFavoritesTracks } from "@/app/components/api/getMyTrackList/getMyTrackList";
import { trackType } from "@/app/components/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading/loading";

export default function MyTracks() {
    const pageTracks = "myTracks";
    const token = useAppSelector((state) => state.auth.userData?.access || "");
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const isFavorite = true;

    useEffect(() => {
        if (token) {
            const fetchTracks = async () => {
                setLoading(true);
                try {
                    const data = await getFavoritesTracks(token);
                    setTracksData(data);
                } catch (error) {
                    console.error("Failed to fetch tracks", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchTracks();
        } else {
            router.push("/signin");
        }
    }, [token, router]);

    return (
        <>
            {loading ? (
                <Loading isLoading={loading} />
            ) : (
                <BodyGetTrack
                    tracksData={tracksData}
                    params={pageTracks}
                    isFavorite={isFavorite}
                />
            )}
        </>
    );
}
