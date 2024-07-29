"use client";

import { useEffect, useState } from "react";
import getTrackList from "../components/api/getTrackList/getTrackList";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { trackType } from "../components/types";

export default function MainTracks() {
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTracks = async () => {
            setLoading(true);
            try {
                const data = await getTrackList();
                setTracksData(data);
            } catch (error) {
                console.error("Failed to fetch tracks", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTracks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <BodyGetTrack tracksData={tracksData} />
        </>
    );
}
