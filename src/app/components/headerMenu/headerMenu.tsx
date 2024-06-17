import Image from "next/image";
import styles from "./headerMenu.module.css";
import classNames from "classnames";

export default function Header() {
    return (
        <>
            <nav className={classNames(styles.main__nav, styles.nav)}>
                <div className={classNames(styles.nav__logo, styles.logo)}>
                    <Image
                        className={styles.logo__image}
                        src="/img/logo.png"
                        alt="Logo"
                        width={250}
                        height={170}
                    />
                </div>
                <div className={classNames(styles.nav__burger, styles.burger)}>
                    <span className={styles.burger__line} />
                    <span className={styles.burger__line} />
                    <span className={styles.burger__line} />
                </div>
                <div className={classNames(styles.nav__menu, styles.menu)}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>
                                Главное
                            </a>
                        </li>
                        <li className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>
                                Мой плейлист
                            </a>
                        </li>
                        <li className={styles.menu__item}>
                            <a
                                href="../signin.html"
                                className={styles.menu__link}
                            >
                                Войти
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
