import styles from "./timeScale.module.css";

function TimeScale() {
    const classNames = require("classnames");
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
                            <div className={styles.player__controls}>
                                <div className={styles.player__btnPrev}>
                                    <svg className={styles.player__btnPrevSvg}>
                                        <use href="img/icon/sprite.svg#iconPrev" />
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.player__btnPlay,
                                        styles._btn
                                    )}
                                >
                                    <svg className={styles.player__btnPlaySvg}>
                                        <use href="img/icon/sprite.svg#iconPlay" />
                                    </svg>
                                </div>
                                <div className={styles.player__btnNext}>
                                    <svg className={styles.player__btnNextSvg}>
                                        <use href="img/icon/sprite.svg#icon-next" />
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.player__btnRepeat,
                                        styles._btnIcon
                                    )}
                                >
                                    <svg
                                        className={styles.player__btnRepeatSvg}
                                    >
                                        <use href="img/icon/sprite.svg#icon-repeat" />
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.player__btnShuffle,
                                        styles._btnIcon
                                    )}
                                >
                                    <svg
                                        className={styles.player__btnShuffleSvg}
                                    >
                                        <use href="img/icon/sprite.svg#iconShuffle" />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className={classNames(
                                    styles.player__trackPlay,
                                    styles.trackPlay
                                )}
                            >
                                <div className={styles.trackPlay__contain}>
                                    <div className={styles.trackPlay__image}>
                                        <svg className={styles.trackPlay__svg}>
                                            <use href="img/icon/sprite.svg#icon-note" />
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
                                            <use href="img/icon/sprite.svg#icon-dislike" />
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
                                        <use href="img/icon/sprite.svg#icon-volume" />
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
