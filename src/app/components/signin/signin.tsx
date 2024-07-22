"use client";

import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import classNames from "classnames";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { postAuthUser } from "../api/login/login";
import { postToken } from "../api/token/token";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

type SigninType = {
    email: string;
    password: string;
};

function SignIn() {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState<SigninType>({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    console.log(errorMessage);

    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSignin = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setErrorMessage(null);

        try {
            const userData = await postAuthUser(loginData);
            dispatch(setAuthState(true));
            dispatch(
                setUserData({
                    username: userData.username,
                    email: userData.email,
                    id: userData.id,
                })
            );

            localStorage.setItem("user", JSON.stringify(userData));

            const tokenData = await postToken(loginData);
            localStorage.setItem("token", JSON.stringify(tokenData.access));
            dispatch(
                setUserData({
                    refresh: tokenData.refresh,
                    access: tokenData.access,
                })
            );
            router.push("/");
        } catch (error: any) {
            if (error.message) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Произошла ошибка авторизации");
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerEnter}>
                <div className={styles.modalBlock}>
                    <form className={styles.modalFormLogin} action="#">
                        <Link href="/">
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
                            type="text"
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
                            <a>Войти</a>
                        </button>

                        <button className={styles.modalBtnSignUp}>
                            <a className={styles.modalBtnText} href="/signup">
                                Зарегистрироваться
                            </a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
