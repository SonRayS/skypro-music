import styles from "./FiltersItem.module.css";
import classNames from "classnames";

type FiltersItemType = {
    isOpen: boolean;
    title: string;
    list: string[];
    handleClick: (el: string) => void;
};

function FiltersItem({ isOpen, handleClick, title, list }: FiltersItemType) {
    return (
        <>
            <div className={styles.trackContainer}>
                <div
                    onClick={() => handleClick(title)}
                    className={classNames(
                        styles.filterButton,
                        styles.buttonAuthor,
                        styles._btnText
                    )}
                >
                    {title}
                </div>
                {isOpen && (
                    <ul className={styles.trackList}>
                        <div className={styles.trackScroll}>
                            {list.map((el) => (
                                <li
                                    className={styles.trackListElement}
                                    key={el}
                                >
                                    <p className={styles.trackListText}>{el}</p>
                                </li>
                            ))}
                        </div>
                    </ul>
                )}
            </div>
        </>
    );
}

export default FiltersItem;
