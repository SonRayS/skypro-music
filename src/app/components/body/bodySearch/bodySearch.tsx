import styles from "./bodySearch.module.css";
import classNames from "classnames";

function Search() {
    return (
        <div className={classNames(styles.centerBlockSearch, styles.search)}>
            <svg className={styles.searchSvg}>
                <use href="/img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                className={styles.searchText}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    );
}

export default Search;
