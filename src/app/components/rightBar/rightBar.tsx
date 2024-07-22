"use client";
import Image from "next/image";
import styles from "./rightBar.module.css";
import classNames from "classnames";
import playList01 from "./playlist01.png";
import playList02 from "./playlist01.png";
import playList03 from "./playlist01.png";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";

function RightBar() {
    const logged = useAppSelector((state) => state.auth.authState);
    const userName = useAppSelector((state) => state.auth.userData);
    const dispatch = useAppDispatch();
    const [isLogged, setIsLogged] = useState(logged);

    useEffect(() => {
        setIsLogged(logged);
    }, [logged]);

    const logout = () => {
        dispatch(setAuthState(false));
        dispatch(setUserData(null));
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <div className={classNames(styles.mainSidebar, styles.sidebar)}>
            <div className={styles.sidebarPersonal}>
                {isLogged && (
                    <>
                        <div>
                            <p className={styles.sidebarPersonalName}>
                                {userName?.email}
                            </p>
                        </div>

                        <svg onClick={logout} className={styles.sidebarIcon}>
                            <use xlinkHref="img/icon/sprite.svg#logout" />
                        </svg>
                    </>
                )}
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
    );
}

export default RightBar;
