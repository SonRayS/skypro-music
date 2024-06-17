import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";

function TimeScale() {
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.bar__content}>
                    <div className={styles.bar__playerProgress} />
                    <div className={styles.bar__playerBlock}>
                        <div
                            className={classNames(
                                styles.bar__player,
                                styles.player
                            )}
                        >
                            <GetTimeControls />

                            <div
                                className={classNames(
                                    styles.player__trackPlay,
                                    styles.trackPlay
                                )}
                            >
                                <div className={styles.trackPlay__contain}>
                                    <div className={styles.trackPlay__image}>
                                        <svg className={styles.trackPlay__svg}>
                                            <use href="/img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className={styles.trackPlay__author}>
                                        <a
                                            className={
                                                styles.trackPlay__authorLink
                                            }
                                            href="http://"
                                        >
                                            Ты та...
                                        </a>
                                    </div>
                                    <div className={styles.trackPlay__album}>
                                        <a
                                            className={
                                                styles.trackPlay__albumLink
                                            }
                                            href="http://"
                                        >
                                            Баста
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.trackPlay__likeDis}>
                                    <div
                                        className={classNames(
                                            styles.trackPlay__like,
                                            styles._btnIcon
                                        )}
                                    >
                                        <svg
                                            className={
                                                styles.trackPlay__likeSvg
                                            }
                                        >
                                            <use href="img/icon/sprite.svg#iconLike" />
                                        </svg>
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.trackPlay__dislike,
                                            styles._btnIcon
                                        )}
                                    >
                                        <svg
                                            className={
                                                styles.trackPlay__dislikeSvg
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
                                styles.bar__volumeBlock,
                                styles.volume
                            )}
                        >
                            <div className={styles.volume__content}>
                                <div className={styles.volume__image}>
                                    <svg className={styles.volume__svg}>
                                        <use href="/img/icon/sprite.svg#icon-volume" />
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.volume__progress,
                                        styles._btn
                                    )}
                                >
                                    <input
                                        className={classNames(
                                            styles.volume__progressLine,
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
