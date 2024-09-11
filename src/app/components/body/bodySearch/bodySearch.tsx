import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { setSearchFilters } from "@/store/features/playlistSlice";
import styles from "./bodySearch.module.css";
import classNames from "classnames";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (searchValue === "") {
            dispatch(setSearchFilters({ searchValue: "", filtersName: [] }));
        } else {
            dispatch(
                setSearchFilters({
                    searchValue: searchValue,
                    filtersName: ["Search"],
                })
            );
        }
    }, [dispatch, searchValue]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
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
