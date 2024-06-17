import styles from "../timeScaleBar/timeScaleBar.module.css";

function GetTimeControls() {
    const classNames = require("classnames");

    return (
        <div className={styles.player__controls}>
            <div className={styles.player__btnPrev}>
                <svg className={styles.player__btnPrevSvg}>
                    <use href="/img/icon/sprite.svg#iconPrev" />
                </svg>
            </div>
            <div className={classNames(styles.player__btnPlay, styles._btn)}>
                <svg className={styles.player__btnPlaySvg}>
                    <use href="/img/icon/sprite.svg#iconPlay" />
                </svg>
            </div>
            <div className={styles.player__btnNext}>
                <svg className={styles.player__btnNextSvg}>
                    <use href="/img/icon/sprite.svg#icon-next" />
                </svg>
            </div>
            <div
                className={classNames(
                    styles.player__btnRepeat,
                    styles._btnIcon
                )}
            >
                <svg className={styles.player__btnRepeatSvg}>
                    <use href="/img/icon/sprite.svg#icon-repeat" />
                </svg>
            </div>
            <div
                className={classNames(
                    styles.player__btnShuffle,
                    styles._btnIcon
                )}
            >
                <svg className={styles.player__btnShuffleSvg}>
                    <use href="/img/icon/sprite.svg#iconShuffle" />
                </svg>
            </div>
        </div>
    );
}

export default GetTimeControls;
