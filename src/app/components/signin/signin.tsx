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

        await postAuthUser(loginData).then((data) => {
            dispatch(setAuthState(true));
            dispatch(
                setUserData({
                    username: data.username,
                    email: data.email,
                    id: data.id,
                })
            );

            localStorage.setItem("user", JSON.stringify(data));
            postToken(loginData).then((data) => {
                localStorage.setItem("token", JSON.stringify(data.access));
                dispatch(
                    setUserData({
                        refresh: data.refresh,
                        access: data.access,
                    })
                );
                router.push("/");
            });
        });
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
