"use client";

import Image from "next/image";
import styles from "./signup.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { postRegUser } from "../api/registration/registration";
import { useRouter } from "next/navigation";

type SignupType = {
    email: string;
    username: string;
    password: string;
    passwordrepeat: string;
};

export default function SignUp() {
    const router = useRouter();
    const [emailActive, setEmailActive] = useState<boolean>(false);
    const [passwordActive, setPasswordActive] = useState<boolean>(false);
    const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);
    const [loginData, setLoginData] = useState<SignupType>({
        email: "",
        username: "",
        password: "",
        passwordrepeat: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const validatePassword = (password: string): string | null => {
        const minLength = 8;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= minLength;

        if (!isLongEnough) return "Пароль должен быть не менее 8 символов.";
        if (!hasUpperCase)
            return "Пароль должен содержать хотя бы одну заглавную букву.";
        if (!hasLowerCase)
            return "Пароль должен содержать хотя бы одну строчную букву.";
        if (!hasDigit) return "Пароль должен содержать хотя бы одну цифру.";
        if (!hasSpecialChar)
            return "Пароль должен содержать хотя бы один специальный символ.";

        const commonPasswords = ["password", "123456", "qwerty", "abc123"];
        if (commonPasswords.includes(password.toLowerCase())) {
            return "Пароль слишком прост.";
        }

        return null;
    };

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationResult = validatePassword(loginData.password);

        if (
            loginData.email === "" &&
            loginData.password === "" &&
            loginData.passwordrepeat === ""
        ) {
            alert("Зарегистрироваться не заполнив поля не выйдет :C");
            return;
        }

        if (loginData.email === "") {
            alert("Заполните поле email");
            return;
        }

        if (loginData.password === "") {
            alert("Заполните поле password");
            return;
        }

        if (loginData.passwordrepeat === "") {
            alert("Заполните поле passwordrepeat");
            return;
        }

        if (loginData.password !== loginData.passwordrepeat) {
            alert("У вас не совпадают поля password/passwordrepeat");
            return;
        }

        if (validationResult) {
            alert(validationResult);
            return;
        } else {
            try {
                await postRegUser(loginData)
                    .then(() => {
                        router.push("/signin");
                    })
                    .catch((error) => {
                        alert(error);
                    });
            } catch (error) {
                console.error("Произошла ошибка:", error);
                alert(error);
            } finally {
                router.push("/signin");
            }
        }
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.containerSignup}>
                    <div className={styles.modalBlock}>
                        <form
                            className={styles.modalFormLogin}
                            onSubmit={handleSignup}
                        >
                            <Link href="/tracks">
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
                                onChange={handleInputChange}
                                className={classNames(
                                    styles.modalInput,
                                    styles.login
                                )}
                                type="email"
                                name="email"
                                placeholder="Почта"
                            />
                            {emailActive && (
                                <div className={styles.emailExample}>
                                    Пример: blablabla@mail.ru
                                </div>
                            )}
                            <input
                                onChange={handleInputChange}
                                className={classNames(
                                    styles.modalInput,
                                    styles.password
                                )}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <input
                                onChange={handleInputChange}
                                className={classNames(
                                    styles.modalInput,
                                    styles.passwordDouble
                                )}
                                type="password"
                                name="passwordrepeat"
                                placeholder="Повторите пароль"
                            />
                            <button
                                className={styles.modalBtnSignupEnt}
                                type="submit"
                            >
                                <a className={styles.modalBtnText}>
                                    Зарегистрироваться
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
