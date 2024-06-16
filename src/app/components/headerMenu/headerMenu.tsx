import Image from "next/image";

export default function Header() {
    return (
        <>
            <nav className="main__nav nav">
                <div className="nav__logo logo">
                    <Image
                        className="logo__image"
                        src="/img/logo.png"
                        alt="Logo"
                        width={250}
                        height={170}
                    />
                </div>
                <div className="nav__burger burger">
                    <span className="burger__line" />
                    <span className="burger__line" />
                    <span className="burger__line" />
                </div>
                <div className="nav__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                Главное
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                Мой плейлист
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="../signin.html" className="menu__link">
                                Войти
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
