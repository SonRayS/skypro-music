import Search from "../bodySearch/bodySearch";
import RadioBtn from "../bodyRadioBtn/bodyRadioBtn";
import TrackHeader from "../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyMainComponent.module.css";

function Body() {
    const classNames = require("classnames");
    return (
        <>
            <div
                className={classNames(
                    styles.main__centerBlock,
                    styles.centerBlock
                )}
            >
                <Search />
                <h2 className={styles.centerBlock__h2}>Треки</h2>
                <RadioBtn />
                <div
                    className={classNames(
                        styles.centerBlock__content,
                        styles.playlistContent
                    )}
                >
                    <TrackHeader />
                    <div
                        className={classNames(
                            styles.content__playlist,
                            styles.playlist
                        )}
                    >
                        <div className={styles.playlist__item}>
                            <div
                                className={classNames(
                                    styles.playlist__track,
                                    styles.track
                                )}
                            >
                                <div className={styles.track__title}>
                                    <div className={styles.track__titleImage}>
                                        <svg className={styles.track__titleSvg}>
                                            <use href="img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className={styles.track__titleText}>
                                        <a
                                            className={styles.track__titleLink}
                                            href="http://"
                                        >
                                            Guilt{" "}
                                            <span
                                                className={
                                                    styles.track__titleSpan
                                                }
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.track__author}>
                                    <a
                                        className={styles.track__authorLink}
                                        href="http://"
                                    >
                                        Nero
                                    </a>
                                </div>
                                <div className={styles.track__album}>
                                    <a
                                        className={styles.track__albumLink}
                                        href="http://"
                                    >
                                        Welcome Reality
                                    </a>
                                </div>
                                <div className={styles.track__time}>
                                    <svg className={styles.track__timeSvg}>
                                        <use href="img/icon/sprite.svg#icon-like" />
                                    </svg>
                                    <span className={styles.track__timeText}>
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
