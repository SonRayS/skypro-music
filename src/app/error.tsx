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
            <div className={styles.PageNotFound}>
                <Image
                    className={styles.PageNotFoundImg}
                    src="/img/Xm404.gif"
                    alt="Page not found :C"
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.PageNotFoundImg}>
                <h2>Что-то пошло не так!</h2>
                <button className={styles.ModalButton} onClick={reset}>
                    <p className={styles.ModalBtnText}>Попробовать снова</p>
                </button>
            </div>
        </>
    );
}
