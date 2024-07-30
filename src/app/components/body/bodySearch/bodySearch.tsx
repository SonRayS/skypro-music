import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearchFilters } from "@/store/features/playlistSlice";
import styles from "./bodySearch.module.css";
import classNames from "classnames";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const filteredName = useAppSelector((state) => state.playlist.filtersName);

    useEffect(() => {
        if (
            filteredName.length > 1 &&
            filteredName.find((el) => el === "Search")
        ) {
            setSearchValue("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            dispatch(setSearchFilters({ searchValue: "", filtersName: [] }));
        }
    }, [filteredName, dispatch]);

    useEffect(() => {
        if (searchValue === "") {
            dispatch(setSearchFilters({ searchValue: "", filtersName: [] }));
        } else {
            dispatch(
                setSearchFilters({
                    searchValue: searchValue.trim(),
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
                ref={inputRef}
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}
