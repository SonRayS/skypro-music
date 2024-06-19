"use client";
import Image from "next/image";
import styles from "./headerMenu.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        setIsOpen((prevState) => !prevState);
    }

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
                            <li className={styles.menuItem}>
                                <a
                                    href="../signin.html"
                                    className={styles.menuLink}
                                >
                                    Войти
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
