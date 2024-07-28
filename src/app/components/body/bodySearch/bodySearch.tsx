import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { setSearchFilters } from "@/store/features/playlistSlice";
import styles from "./bodySearch.module.css";
import classNames from "classnames";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        dispatch(setSearchFilters({ searchValue: value }));
    };

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
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}
