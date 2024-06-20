import Image from "next/image";
import styles from "./rightBar.module.css";
import classNames from "classnames";
import playList01 from "./playlist01.png";
import playList02 from "./playlist01.png";
import playList03 from "./playlist01.png";

function RightBar() {
    return (
        <>
            <div className={classNames(styles.mainSidebar, styles.sidebar)}>
                <div className={styles.sidebarPersonal}>
                    <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
                    <div className={styles.sidebarIcon}>
                        <svg>
                            <use xlinkHref="img/icon/sprite.svg#logout" />
                        </svg>
                    </div>
                </div>
                <div className={styles.sidebarBlock}>
                    <div className={styles.sidebarList}>
                        <div className={styles.sidebarItem}>
                            <a className={styles.sidebarLink} href="#">
                                <Image
                                    src={playList01}
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            </a>
                        </div>
                        <div className={styles.sidebarItem}>
                            <a className={styles.sidebarLink} href="#">
                                <Image
                                    src={playList02}
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            </a>
                        </div>
                        <div className={styles.sidebarItem}>
                            <a className={styles.sidebarLink} href="#">
                                <Image
                                    src={playList03}
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
