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

    const handleSignin = async () => {
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
                    localStorage.setItem("token", JSON.stringify(data.access));
                    router.push("/tracks");
                });
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerEnter}>
                <div className={styles.modalBlock}>
                    <form className={styles.modalFormLogin} action="#">
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
                        <button
                            className={styles.modalBtnEnter}
                            onClick={handleSignin}
                        >
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
