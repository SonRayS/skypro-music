"use client";

import { useAppSelector } from "@/hooks";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getFavoritesTracks } from "../components/api/getMyTrackList/getMyTrackList";
import { trackType } from "../components/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MyTracks() {
    const pageTracks = "myTracks";
    const Favorite = true;
    const token = useAppSelector((state) => state.auth.userData.access);
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

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

    if (loading) {
        return <div>Loading...</div>;
    }

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
