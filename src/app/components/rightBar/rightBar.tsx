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
import Link from "next/link";

export default function RightBar() {
    const logged = useAppSelector((state) => state.auth.authState);
    const userName = useAppSelector((state) => state.auth.userData);
    const dispatch = useAppDispatch();
    const [isLogged, setIsLogged] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsLogged(logged);
    }, [logged]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const logout = () => {
        dispatch(setAuthState(false));
        dispatch(setUserData(null));
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    if (!isMounted) {
        return null; // Пока компонент не смонтирован, ничего не рендерим
    }

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
                        <Link
                            className={styles.sidebarLink}
                            href="/tracks/category/1"
                        >
                            <Image
                                src={playList01}
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link
                            className={styles.sidebarLink}
                            href="/tracks/category/2"
                        >
                            <Image
                                src={playList02}
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link
                            className={styles.sidebarLink}
                            href="/tracks/category/3"
                        >
                            <Image
                                src={playList03}
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
