import styles from "./bodyTrackHeder.module.css";
import classNames from "classnames";

function TrackHeader() {
    return (
        <div
            className={classNames(styles.content__title, styles.playlistTitle)}
        >
            <div
                className={classNames(styles.playlistTitle__col, styles.col01)}
            >
                Трек
            </div>
            <div
                className={classNames(styles.playlistTitle__col, styles.col02)}
            >
                Исполнитель
            </div>
            <div
                className={classNames(styles.playlistTitle__col, styles.col03)}
            >
                Альбом
            </div>
            <div
                className={classNames(styles.playlistTitle__col, styles.col04)}
            >
                <svg className={styles.playlistTitle__svg}>
                    <use href="img/icon/sprite.svg#icon-watch" />
                </svg>
            </div>
        </div>
    );
}

export default TrackHeader;
