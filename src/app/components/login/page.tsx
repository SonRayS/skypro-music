import Image from "next/image";
import styles from "./pageLogin.module.css";
import classNames from "classnames";

function LoginPage() {
    return (
        <body>
            <div className={styles.styles.wrapper}>
                <div className={styles.styles.containerEnter}>
                    <div className={styles.styles.modalBlock}>
                        <form
                            className={styles.styles.modalDormLogin}
                            action="#"
                        >
                            <a href="../">
                                <div className={styles.styles.modalLogo}>
                                    <Image
                                        src="./img/logoModal.png"
                                        alt="logo"
                                        width={250}
                                        height={170}
                                    />
                                </div>
                            </a>
                            <input
                                className={styles.classNames(
                                    styles.modalInput,
                                    styles.login
                                )}
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <input
                                className={styles.classNames(
                                    styles.modalInput,
                                    styles.password
                                )}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <button className={styles.styles.modalBtnEnter}>
                                <a href="../index.html">Войти</a>
                            </button>
                            <button className={styles.styles.modalBtnSignup}>
                                <a href="signup.html">Зарегистрироваться</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default LoginPage;
