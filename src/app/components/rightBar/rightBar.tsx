"use client";

import Image from "next/image";
import styles from "./rightBar.module.css";
import classNames from "classnames";
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

                        <div onClick={logout} className={styles.sidebarIcon}>
                            <Link href="/tracks">
                                <svg>
                                    <use xlinkHref="img/icon/sprite.svg#logout" />
                                </svg>
                            </Link>
                        </div>
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
                                className={styles.sidebarImg}
                                src="/img/playlist01.png"
                                alt="Плейлист дня"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link
                            className={styles.sidebarLink}
                            href="/tracks/category/2"
                        >
                            <Image
                                className={styles.sidebarImg}
                                src="/img/playlist02.png"
                                alt="100 танцевальных хитов"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link
                            className={styles.sidebarLink}
                            href="/tracks/category/3"
                        >
                            <Image
                                className={styles.sidebarImg}
                                src="/img/playlist03.png"
                                alt="Инди заряд"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
