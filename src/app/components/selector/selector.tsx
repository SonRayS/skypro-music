import styles from "./selector.module.css";
import TimeScale from "../timeScale/timeScale";

function Selector({ children }: { children: React.ReactNode }) {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Skypro</title>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <main className={styles.main}>{children}</main>
                    <TimeScale />
                    <footer />
                </div>
            </div>
        </>
    );
}

export default Selector;
