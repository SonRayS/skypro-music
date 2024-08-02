"use client";

import { useEffect, useState } from "react";
import getTrackList from "../components/api/getTrackList/getTrackList";
import BodyGetTrack from "../components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { trackType } from "../components/types";
import Loading from "../components/loading/loading";
import useLogoutOnPageUnload from "../components/authoCheckPage/autoCheckPage";

export default function MainTracks() {
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useLogoutOnPageUnload();

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

    return (
        <>
            {loading ? (
                <Loading isLoading={loading} />
            ) : (
                <BodyGetTrack tracksData={tracksData} />
            )}
        </>
    );
}
