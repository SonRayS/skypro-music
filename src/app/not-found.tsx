"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
    const router = useRouter();

    const click = () => {
        router.push("/tracks");
    };
    return (
        <>
            <div className={styles.Selector404}>
                <Image
                    className={styles.Selector404Img}
                    src="/img/404.png"
                    alt="@#$%^ :C"
                    width={1024}
                    height={512}
                />
                <h1 className={styles.Selector404Title}>
                    Page not fond @#$%^! :__C
                </h1>
                <button onClick={click} className={styles.Selector404Btn}>
                    <p className={styles.Selector404BtnText}>Go to main page</p>
                </button>
            </div>
        </>
    );
}
