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
    params?: string;
};

export default function BodyGetTrack({
    tracksData,
    isFavorite,
    params,
}: getTrackType) {
    const newTrack = useAppSelector((el) => el.playlist.filterList);
    const newTracksData = newTrack.length > 0 ? newTrack : tracksData;
    const isFavoriteStatus = isFavorite ? tracksData : newTracksData;

    let mainTitle: string = "";
    if (params) {
        if (params === "1") {
            mainTitle = "Плейлист дня";
        } else if (params === "2") {
            mainTitle = "100 танцевальных хитов";
        } else {
            mainTitle = "Инди-заряд";
        }
    } else {
        mainTitle = "Треки";
    }

    return (
        <>
            <div
                className={classNames(
                    styles.mainCenterBlock,
                    styles.centerBlock
                )}
            >
                <Search />
                <h2 className={styles.centerBlockH2}>{mainTitle}</h2>
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
