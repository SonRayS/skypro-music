import styles from "./timePlayerControls.module.css";
import classNames from "classnames";

function GetTimeControls() {
    return (
        <div className={styles.playerControls}>
            <div className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                    <use href="/img/icon/sprite.svg#icon-prev" />
                </svg>
            </div>
            <div className={classNames(styles.playerBtnPlay, styles._btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                    <use href="/img/icon/sprite.svg#icon-play" />
                </svg>
            </div>
            <div className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                    <use href="/img/icon/sprite.svg#icon-next" />
                </svg>
            </div>
            <div
                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
            >
                <svg className={styles.playerBtnRepeatSvg}>
                    <use href="/img/icon/sprite.svg#icon-repeat" />
                </svg>
            </div>
            <div
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
            >
                <svg className={styles.playerBtnShuffleSvg}>
                    <use href="/img/icon/sprite.svg#icon-shuffle" />
                </svg>
            </div>
        </div>
    );
}

export default GetTimeControls;
