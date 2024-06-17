import styles from "./bodySearch.module.css";
import classNames from "classnames";

function Search() {
    return (
        <div className={classNames(styles.centerBlock__search, styles.search)}>
            <svg className={styles.search__svg}>
                <use href="/img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    );
}

export default Search;
