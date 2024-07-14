"use client";
import Image from "next/image";
import styles from "./headerMenu.module.css";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { goToAuth } from "@/store/features/exitSlice";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function handleClick() {
        setIsOpen((prevState) => !prevState);
    }

    const statusAuth = useAppSelector((state) => state.authReducer.goAuth);

    function handleAuthClick() {
        statusAuth
            ? dispatch(goToAuth({ status: false }))
            : dispatch(goToAuth({ status: true }));
    }

    console.log(statusAuth);

    return (
        <>
            <nav className={classNames(styles.mainNav, styles.nav)}>
                <div className={classNames(styles.navLogo, styles.logo)}>
                    <Image
                        className={styles.logoImage}
                        src="/img/logo.png"
                        alt="Logo"
                        width={250}
                        height={170}
                    />
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
                                <a href="#" className={styles.menuLink}>
                                    Главное
                                </a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#" className={styles.menuLink}>
                                    Мой плейлист
                                </a>
                            </li>
                            <li
                                className={styles.menuItem}
                                onClick={handleAuthClick}
                            >
                                <Link href="/" className={styles.menuLink}>
                                    Войти
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
