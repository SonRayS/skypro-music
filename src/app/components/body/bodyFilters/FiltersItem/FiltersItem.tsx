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
                <ul>
                    {list.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default FiltersItem;
