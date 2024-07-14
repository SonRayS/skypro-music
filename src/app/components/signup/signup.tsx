import Image from "next/image";
import styles from "./signup.module.css";
import classNames from "classnames";
import Link from "next/link";

function SignUp() {
    return (
        <body>
            <div className={styles.wrapper}>
                <div className={styles.containerSignup}>
                    <div className={styles.modalBlock}>
                        <form className={styles.modalFormLogin}>
                            <Link href="/">
                                <div className={styles.modalLogo}>
                                    <Image
                                        src="/img/logo_modal.png"
                                        alt="logo"
                                        width={250}
                                        height={170}
                                    />
                                </div>
                            </Link>
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
                                    styles.passwordFirst
                                )}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <input
                                className={classNames(
                                    styles.modalInput,
                                    styles.passwordDouble
                                )}
                                type="password"
                                name="password"
                                placeholder="Повторите пароль"
                            />
                            <button className={styles.modalBtnSignupEnt}>
                                <a className={styles.modalBtnText}>
                                    Зарегистрироваться
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default SignUp;
