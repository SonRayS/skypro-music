import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";

function TimeScale() {
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.barContent}>
                    <div className={styles.barPlayerProgress} />
                    <div className={styles.barPlayerBlock}>
                        <div
                            className={classNames(
                                styles.barPlayer,
                                styles.player
                            )}
                        >
                            <GetTimeControls />

                            <div
                                className={classNames(
                                    styles.playerTrackPlay,
                                    styles.trackPlay
                                )}
                            >
                                <div className={styles.trackPlayContain}>
                                    <div className={styles.trackPlayImage}>
                                        <svg className={styles.trackPlaySvg}>
                                            <use href="/img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className={styles.trackPlayAuthor}>
                                        <a
                                            className={
                                                styles.trackPlayAuthorLink
                                            }
                                            href="http://"
                                        >
                                            Ты та...
                                        </a>
                                    </div>
                                    <div className={styles.trackPlayAlbum}>
                                        <a
                                            className={
                                                styles.trackPlayAlbumLink
                                            }
                                            href="http://"
                                        >
                                            Баста
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.trackPlayLikeDis}>
                                    <div
                                        className={classNames(
                                            styles.trackPlayLike,
                                            styles._btnIcon
                                        )}
                                    >
                                        <svg
                                            className={styles.trackPlayLikeSvg}
                                        >
                                            <use href="img/icon/sprite.svg#iconLike" />
                                        </svg>
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.trackPlayDislike,
                                            styles._btnIcon
                                        )}
                                    >
                                        <svg
                                            className={
                                                styles.trackPlayDislikeSvg
                                            }
                                        >
                                            <use href="/img/icon/sprite.svg#icon-dislike" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                styles.barVolumeBlock,
                                styles.volume
                            )}
                        >
                            <div className={styles.volumeContent}>
                                <div className={styles.volumeImage}>
                                    <svg className={styles.volumeSvg}>
                                        <use href="/img/icon/sprite.svg#icon-volume" />
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.volumeProgress,
                                        styles._btn
                                    )}
                                >
                                    <input
                                        className={classNames(
                                            styles.volumeProgressLine,
                                            styles._btn
                                        )}
                                        type="range"
                                        name="range"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TimeScale;
