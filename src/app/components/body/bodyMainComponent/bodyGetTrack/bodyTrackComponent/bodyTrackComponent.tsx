"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { trackType } from "@/app/components/types";
import TimeFormat from "@/app/components/setTime/setTime";
import { useAppDispatch } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type trackTypes = {
    name: string;
    author: string;
    album: string;
    el: trackType;
};

function TrackComponent({ name, author, album, el }: trackTypes) {
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(setCurrentTrack(el));
    }

    return (
        <div
            onClick={handleClick}
            className={classNames(styles.contentPlaylist, styles.playlist)}
        >
            <div className={styles.playlistItem}>
                <div className={classNames(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            <svg className={styles.trackTitleSvg}>
                                <use href="img/icon/sprite.svg#icon-note" />
                            </svg>
                        </div>
                        <div className={styles.trackTitleText}>
                            <span className={styles.trackTitleLink}>
                                {name}
                                <span className={styles.trackTitleSpan} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <span className={styles.trackAuthorLink}>{author}</span>
                    </div>
                    <div className={styles.trackAlbum}>
                        <span className={styles.trackAlbumLink}>{album}</span>
                    </div>
                    <div className={styles.trackTime}>
                        <svg className={styles.trackTimeSvg}>
                            <use href="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.trackTimeText}>
                            <TimeFormat number={el.duration_in_seconds} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackComponent;
