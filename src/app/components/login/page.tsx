import Image from "next/image";
import styles from "./pageLogin.module.css";
import classNames from "classnames";

function LoginPage() {
    return (
        <body>
            <div className={styles.wrapper}>
                <div className={styles.containerEnter}>
                    <div className={styles.modalBlock}>
                        <form className={styles.modalDormLogin} action="#">
                            <a href="../">
                                <div className={styles.modalLogo}>
                                    <Image
                                        src="./img/logoModal.png"
                                        alt="logo"
                                        width={250}
                                        height={170}
                                    />
                                </div>
                            </a>
                            <input
                                className={classNames(
                                    styles.modalInput,
                                    styles.login
                                )}
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <input
                                className={classNames(
                                    styles.modalInput,
                                    styles.password
                                )}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <button className={styles.modalBtnEnter}>
                                <a href="../index.html">Войти</a>
                            </button>
                            <button className={styles.modalBtnSignup}>
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
