"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { trackType } from "@/app/components/types";
import TimeFormat from "@/app/components/setTime/setTime";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type trackTypes = {
    track: trackType;
    tracksData: trackType[];
};

function TrackComponent({ track, tracksData }: trackTypes) {
    const dispatch = useAppDispatch();

    function handleTrackClick() {
        dispatch(setCurrentTrack({ track, tracksData }));
    }

    const isPlaying = useAppSelector((state) => state.playlist.currentTrack);

    return (
        <div
            onClick={handleTrackClick}
            className={classNames(styles.contentPlaylist, styles.playlist)}
        >
            <div className={styles.playlistItem}>
                <div className={classNames(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            <svg className={styles.trackTitleSvg}>
                                <use
                                    href={`img/icon/sprite.svg#icon-${
                                        isPlaying ? "isPlaying" : "note"
                                    }`}
                                />
                            </svg>
                        </div>
                        <div className={styles.trackTitleText}>
                            <span className={styles.trackTitleLink}>
                                {track.name}
                                <span className={styles.trackTitleSpan} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <span className={styles.trackAuthorLink}>
                            {track.author}
                        </span>
                    </div>
                    <div className={styles.trackAlbum}>
                        <span className={styles.trackAlbumLink}>
                            {track.album}
                        </span>
                    </div>
                    <div className={styles.trackTime}>
                        <svg className={styles.trackTimeSvg}>
                            <use href="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.trackTimeText}>
                            <TimeFormat number={track.duration_in_seconds} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackComponent;
