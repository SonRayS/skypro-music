import styles from "./bodyTrackHeder.module.css";
import classNames from "classnames";

export default function TrackHeader() {
    return (
        <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
            <div className={classNames(styles.playlistTitleCol, styles.col01)}>
                Трек
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col02)}>
                Исполнитель
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col03)}>
                Альбом
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                <svg className={styles.playlistTitleSvg}>
                    <use href="img/icon/sprite.svg#icon-watch" />
                </svg>
            </div>
        </div>
    );
}
