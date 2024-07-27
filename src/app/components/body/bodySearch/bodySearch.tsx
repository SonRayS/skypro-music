import {
    setFilterList,
    setSearchFilters,
} from "@/store/features/playlistSlice";
import styles from "./bodySearch.module.css";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();
    const filterPlaylist = useAppSelector(
        (state) => state.playlist.filterPlaylist
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        dispatch(setSearchFilters({ searchValue: e.target.value }));
    };

    useEffect(() => {
        let filteredTracks = filterPlaylist.filter(
            (track) =>
                track.album.toLowerCase().includes(searchValue.toLowerCase()) ||
                track.author
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                track.genre.toLowerCase().includes(searchValue.toLowerCase())
        );

        dispatch(
            setFilterList({
                tracksFilters: filteredTracks,
                filtersName: Array.from(new Set("search")),
            })
        );
    }, [dispatch, filterPlaylist, searchValue]);

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
