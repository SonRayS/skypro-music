import styles from "./loading.module.css";

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
    if (isLoading) {
        return (
            <>
                <div className={styles.spinnerBlock}>
                    <h2 className={styles.spinnerText}>Загрузка...</h2>
                    <div className={styles.spinner}></div>
                </div>
            </>
        );
    }
    return null;
};

export default Loading;
