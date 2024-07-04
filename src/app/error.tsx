"use client";

import { useEffect } from "react";
import styles from "./error.module.css";
import Image from "next/image";

export default function Error({
    error,
    reset,
}: {
    error: TypeError;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <div className={styles.errContainer}>
                <div className={styles.err}>
                    <Image
                        className={styles.errImg}
                        src="/img/smile_sad.png"
                        alt="Error-ka :C"
                        width={120}
                        height={120}
                    />
                </div>
                <div className={styles.PageNotFoundImg}>
                    <h1>Ошибка загрузки</h1>
                    <p className={styles.errBtnText}>
                        Проверьте подключение к сети и повторите попытку
                    </p>
                    <button className={styles.errButton} onClick={reset}>
                        <p className={styles.errBtnText}>Повторить</p>
                    </button>
                </div>
            </div>
        </>
    );
}
