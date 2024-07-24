"use client";
import Search from "../../bodySearch/bodySearch";
import Filters from "../../bodyFilters/Filters";
import TrackHeader from "../../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyGetTrack.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import { trackType } from "@/app/components/types";
import { useAppSelector } from "@/hooks";

type getTrackType = {
    tracksData: trackType[];
    isFavorite?: boolean;
};

export default function BodyGetTrack({ tracksData, isFavorite }: getTrackType) {
    const newTrack = useAppSelector((el) => el.playlist.filterList);
    const newTracksData = newTrack.length > 0 ? newTrack : tracksData;
    const isFavoriteStatus = isFavorite ? tracksData : newTracksData;

    return (
        <>
            <div
                className={classNames(
                    styles.mainCenterBlock,
                    styles.centerBlock
                )}
            >
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
                    {isFavoriteStatus.map((el) => (
                        <TrackComponent
                            key={el.id}
                            track={el}
                            tracksData={tracksData}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
