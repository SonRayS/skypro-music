"use client";

import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";

type trackType = {
    name: string;
    author: string;
    album: string;
};

function TrackComponent({ name, author, album }: trackType) {
    return (
        <div className={classNames(styles.contentPlaylist, styles.playlist)}>
            <div className={styles.playlistItem}>
                <div className={classNames(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            <svg className={styles.trackTitleSvg}>
                                <use href="img/icon/sprite.svg#icon-note" />
                            </svg>
                        </div>
                        <div className={styles.trackTitleText}>
                            <a className={styles.trackTitleLink} href="http://">
                                {name}{" "}
                                <span className={styles.trackTitleSpan} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <a className={styles.trackAuthorLink} href="http://">
                            {author}
                        </a>
                    </div>
                    <div className={styles.trackAlbum}>
                        <a className={styles.trackAlbumLink} href="http://">
                            {album}
                        </a>
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
