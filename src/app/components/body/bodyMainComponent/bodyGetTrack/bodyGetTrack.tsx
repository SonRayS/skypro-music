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
    tracks: trackType[];
};

function BodyGetTrack({ tracks }: getTrackType) {
    const shuffle = useAppSelector((state) => state.playlist.shuffledPlaylist);
    const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
    const playList = isShuffle ? shuffle : tracks;

    return (
        <>
            <Search />
            <h2 className={styles.centerBlockH2}>Треки</h2>
            <Filters tracks={tracks} />
            <div
                className={classNames(
                    styles.centerBlockContent,
                    styles.playlistContent
                )}
            >
                <TrackHeader />
                {playList.map((el) => (
                    <TrackComponent
                        key={el.id}
                        track={el}
                        tracksData={playList}
                    />
                ))}
            </div>
        </>
    );
}

export default BodyGetTrack;
