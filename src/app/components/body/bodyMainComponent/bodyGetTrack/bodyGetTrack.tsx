import Search from "../../bodySearch/bodySearch";
import Filters from "../../bodyFilters/Filters";
import TrackHeader from "../../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyGetTrack.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import { trackType } from "@/app/components/types";

type getTrackType = {
    track: trackType;
    tracks: trackType[];
};

export function BodyGetTrack({ track, tracks }: getTrackType) {
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
                <TrackComponent
                    key={track.id}
                    name={track.name}
                    author={track.author}
                    album={track.album}
                    el={track}
                />
            </div>
        </>
    );
}

export default Body;
