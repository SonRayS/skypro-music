import Search from "../bodySearch/bodySearch";
import RadioBtn from "../bodyRadioBtn/bodyRadioBtn";
import TrackHeader from "../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyMainComponent.module.css";
import classNames from "classnames";

function Body() {
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
                <RadioBtn />
                <div
                    className={classNames(
                        styles.centerBlockContent,
                        styles.playlistContent
                    )}
                >
                    <TrackHeader />
                    <div
                        className={classNames(
                            styles.contentPlaylist,
                            styles.playlist
                        )}
                    >
                        <div className={styles.playlistItem}>
                            <div
                                className={classNames(
                                    styles.playlistTrack,
                                    styles.track
                                )}
                            >
                                <div className={styles.trackTitle}>
                                    <div className={styles.trackTitleImage}>
                                        <svg className={styles.trackTitleSvg}>
                                            <use href="img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className={styles.trackTitleText}>
                                        <a
                                            className={styles.trackTitleLink}
                                            href="http://"
                                        >
                                            Guilt{" "}
                                            <span
                                                className={
                                                    styles.trackTitleSpan
                                                }
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.trackAuthor}>
                                    <a
                                        className={styles.trackAuthorLink}
                                        href="http://"
                                    >
                                        Nero
                                    </a>
                                </div>
                                <div className={styles.trackAlbum}>
                                    <a
                                        className={styles.trackAlbumLink}
                                        href="http://"
                                    >
                                        Welcome Reality
                                    </a>
                                </div>
                                <div className={styles.trackTime}>
                                    <svg className={styles.trackTimeSvg}>
                                        <use href="img/icon/sprite.svg#icon-like" />
                                    </svg>
                                    <span className={styles.trackTimeText}>
                                        4:44
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
