"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { useTrackContext } from "@/app/components/context/useTrack";
import { trackType } from "../../../types";

type trackTypes = {
    name: string;
    author: string;
    album: string;
    el: trackType;
};

function TrackComponent({ name, author, album, el }: trackTypes) {
    const { track, setTrack } = useTrackContext();

    function handleClick() {
        if (track) {
            setTrack(el);
        } else {
            setTrack(null);
        }
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
                        <span className={styles.trackTimeText}>4:44</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackComponent;
