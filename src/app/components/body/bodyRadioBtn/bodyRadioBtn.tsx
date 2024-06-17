import styles from "./bodyRadioBtn.module.css";

function RadioBtn() {
    const classNames = require("classnames");
    return (
        <div className={classNames(styles.centerBlock__filter, styles.filter)}>
            <div className={styles.filter__title}>Искать по:</div>
            <div
                className={classNames(
                    styles.filter__button,
                    styles.buttonAuthor,
                    styles._btnText
                )}
            >
                исполнителю
            </div>
            <div
                className={classNames(
                    styles.filter__button,
                    styles.buttonYear,
                    styles._btnText
                )}
            >
                году выпуска
            </div>
            <div
                className={classNames(
                    styles.filterButton,
                    styles.buttonGenre,
                    styles._btnText
                )}
            >
                жанру
            </div>
        </div>
    );
}

export default RadioBtn;
