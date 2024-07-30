"use client";

import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useState } from "react";
import { postAuthUser } from "../api/login/login";
import { postToken } from "../api/token/token";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

type SigninType = {
    email: string;
    password: string;
};

export default function SignIn() {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState<SigninType>({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (loginData.email === "") {
            alert("Введите email");
            return;
        }
        if (loginData.password === "") {
            alert("Введите password");
            return;
        }

        try {
            await postAuthUser(loginData)
                .then((data) => {
                    localStorage.setItem("user", JSON.stringify(data));
                    dispatch(setAuthState(true));
                    dispatch(
                        setUserData({
                            username: data.username,
                            email: data.email,
                            id: data.id,
                        })
                    );

                    postToken(loginData).then((data) => {
                        dispatch(
                            setUserData({
                                refresh: data.refresh,
                                access: data.access,
                            })
                        );
                        localStorage.setItem(
                            "token",
                            JSON.stringify(data.access)
                        );
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        } catch (error) {
            console.error("Произошла ошибка:", error);
            alert(error);
        } finally {
            router.push("/tracks");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerEnter}>
                <div className={styles.modalBlock}>
                    <form
                        className={styles.modalFormLogin}
                        action="#"
                        onSubmit={handleSignin}
                    >
                        <Link href="/tracks">
                            <div className={styles.modalLogo}>
                                <Image
                                    src="/img/logo_modal.png"
                                    alt="логотип"
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
                        <button className={styles.modalBtnEnter} type="submit">
                            <p>Войти</p>
                        </button>

                        <button className={styles.modalBtnSignUp}>
                            <Link
                                className={styles.modalBtnText}
                                href="/signup"
                            >
                                Зарегистрироваться
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
