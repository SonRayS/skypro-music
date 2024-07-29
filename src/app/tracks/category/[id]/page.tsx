"use client";

import BodyGetTrack from "@/app/components/body/bodyMainComponent/bodyGetTrack/bodyGetTrack";
import { getPlaylist } from "@/app/components/api/getPlaylistId/getPlaylistId";
import { useEffect, useState } from "react";
import { trackType } from "@/app/components/types";

type paramsCategory = {
    params: { id: string };
};

export default function CategoryPage({ params }: paramsCategory) {
    const [tracksData, setTracksData] = useState<trackType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTracks = async () => {
            setLoading(true);
            try {
                const data = await getPlaylist(params.id);
                setTracksData(data);
            } catch (error) {
                console.error("Failed to fetch tracks", error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchTracks();
        }
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <BodyGetTrack tracksData={tracksData} params={params.id} />
        </>
    );
}
