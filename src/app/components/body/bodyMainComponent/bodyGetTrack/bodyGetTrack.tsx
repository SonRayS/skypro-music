"use client";
import Search from "../../bodySearch/bodySearch";
import Filters from "../../bodyFilters/Filters";
import TrackHeader from "../../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyGetTrack.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import { trackType } from "@/app/components/types";

type getTrackType = {
    tracks: trackType[];
};

function BodyGetTrack({ tracks }: getTrackType) {
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
                {tracks.map((el) => (
                    <TrackComponent
                        key={el.id}
                        name={el.name}
                        author={el.author}
                        album={el.album}
                        el={el}
                    />
                ))}
            </div>
        </>
    );
}

export default BodyGetTrack;
