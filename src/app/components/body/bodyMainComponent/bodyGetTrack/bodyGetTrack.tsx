"use client";
import Search from "../../bodySearch/bodySearch";
import Filters from "../../bodyFilters/Filters";
import TrackHeader from "../../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyGetTrack.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import { trackType } from "@/app/components/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { setFilterPlaylist } from "@/store/features/playlistSlice";

type getTrackType = {
    tracksData: trackType[];
};

function BodyGetTrack({ tracksData }: getTrackType) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFilterPlaylist({ tracksData }));
    }, [dispatch, tracksData]);

    const newTrack = useAppSelector((el) => el.playlist.filterList);
    const newTracksData = newTrack.length > 0 ? newTrack : tracksData;

    return (
        <>
            <Search />
            <h2 className={styles.centerBlockH2}>Треки</h2>
            <Filters tracks={tracksData} />
            <div
                className={classNames(
                    styles.centerBlockContent,
                    styles.playlistContent
                )}
            >
                <TrackHeader />
                {newTracksData.map((el) => (
                    <TrackComponent
                        key={el.id}
                        track={el}
                        tracksData={tracksData}
                    />
                ))}
            </div>
        </>
    );
}

export default BodyGetTrack;
