"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./FiltersItem.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { trackType } from "@/app/components/types";
import { setFilterList } from "@/store/features/playlistSlice";

type FiltersItemType = {
    isOpen: boolean;
    title: string;
    list: string[] | number[];
    handleClick: (el: string) => void;
};

function FiltersItem({ isOpen, title, list, handleClick }: FiltersItemType) {
    const dispatch = useAppDispatch();
    const [filterNumber, setFilterNumber] = useState<number>(0);
    const filterPlaylist = useAppSelector(
        (state) => state.playlist.filterPlaylist
    );
    const filterList = useAppSelector((state) => state.playlist.filterList);
    const filtersName = useAppSelector((state) => state.playlist.filtersName);

    console.log(filtersName);

    function extractYearsFromObject(dateObj: string): number {
        const date = new Date(dateObj);
        return date.getFullYear();
    }

    function setFilters(
        el: string | number,
        title: string,
        filterPlaylist: trackType[],
        filterList: trackType[],
        filtersName: string[]
    ) {
        handleClick(title);

        // Фильтрация треков
        let filteredTracks = filterPlaylist.filter(
            (obj) =>
                obj.genre === el ||
                obj.author === el ||
                extractYearsFromObject(obj.release_date) === el
        );

        let updatedFiltersName = [...filtersName];
        if (!updatedFiltersName.includes(String(el))) {
            updatedFiltersName.push(String(el));
        }

        console.log(updatedFiltersName);

        // Обновление состояния
        dispatch(
            setFilterList({
                tracksFilters:
                    filterList.length === 0
                        ? filteredTracks
                        : Array.from(
                              new Set(filteredTracks.concat(filterList))
                          ),
                filtersName: Array.from(new Set(updatedFiltersName)),
            })
        );
    }

    return (
        <>
            <div className={styles.trackContainer}>
                <div
                    onClick={() => handleClick(title)}
                    className={classNames(
                        styles.filterButton,
                        styles.buttonAuthor,
                        styles.activeFilter,
                        isOpen ? styles.btnTextIsOpen : styles.btnText
                    )}
                >
                    {title}
                </div>
                {filterNumber > 0 ? (
                    <div className={styles.filterNumber}>{filterNumber}</div>
                ) : null}
                {isOpen && (
                    <ul className={styles.trackList}>
                        <div className={styles.trackScroll}>
                            {list.map((el, index) => (
                                <li
                                    className={styles.trackListElement}
                                    key={index}
                                    onClick={() =>
                                        setFilters(
                                            el,
                                            title,
                                            filterPlaylist,
                                            filterList,
                                            filtersName
                                        )
                                    }
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
