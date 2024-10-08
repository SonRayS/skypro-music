"use client";
import Image from "next/image";
import styles from "./headerMenu.module.css";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuthState, setUserData } from "@/store/features/authSlice";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logged = useAppSelector((state) => state.auth.authState);
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(setAuthState(false));
        dispatch(setUserData(null));
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    function handleClick() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <nav className={classNames(styles.mainNav, styles.nav)}>
                <div className={classNames(styles.navLogo, styles.logo)}>
                    <Link href="/tracks">
                        <Image
                            className={styles.logoImage}
                            src="/img/logo.png"
                            alt="Logo"
                            width={250}
                            height={170}
                        />
                    </Link>
                </div>

                <div
                    className={classNames(styles.navBurger, styles.burger)}
                    onClick={handleClick}
                >
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                </div>
                {isOpen && (
                    <div className={classNames(styles.navMenu, styles.menu)}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}>
                                <Link
                                    href="/tracks"
                                    className={styles.menuLink}
                                >
                                    Главное
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                {logged ? (
                                    <Link
                                        href="/tracks/myTracks"
                                        className={styles.menuLink}
                                    >
                                        Мой плейлист
                                    </Link>
                                ) : (
                                    <Link
                                        href="/signin"
                                        className={styles.menuLink}
                                    >
                                        Мой плейлист
                                    </Link>
                                )}
                            </li>
                            <li className={styles.menuItem}>
                                {logged ? (
                                    <Link
                                        onClick={logout}
                                        href="/tracks"
                                        className={styles.menuLink}
                                    >
                                        Выйти
                                    </Link>
                                ) : (
                                    <Link
                                        href="/signin"
                                        className={styles.menuLink}
                                    >
                                        Войти
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
