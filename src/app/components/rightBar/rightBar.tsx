import Image from "next/image";
import styles from "./rightBar.module.css";

function RightBar() {
    const classNames = require("classnames");
    return (
        <>
            <div className={classNames(styles.main__sidebar, styles.sidebar)}>
                <div className={styles.sidebar__personal}>
                    <p className={styles.sidebar__personalName}>
                        Sergey.Ivanov
                    </p>
                    <div className={styles.sidebar__icon}>
                        <svg>
                            <use xlinkHref="img/icon/sprite.svg#logout" />
                        </svg>
                    </div>
                </div>
                <div className={styles.sidebar__block}>
                    <div className={styles.sidebar__list}>
                        <div className={styles.sidebar__item}>
                            <a className={styles.sidebar__link} href="#">
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist01.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            </a>
                        </div>
                        <div className={styles.sidebar__item}>
                            <a className={styles.sidebar__link} href="#">
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist02.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            </a>
                        </div>
                        <div className={styles.sidebar__item}>
                            <a className={styles.sidebar__link} href="#">
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist03.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightBar;
