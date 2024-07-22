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
    const activeTitle = useAppSelector((state) => state.playlist.activeTitle);

    function extractYearsFromObject(dateObj: string): number {
        const date = new Date(dateObj);
        return date.getFullYear();
    }

    function setFilters(
        el: string | number,
        filterPlaylist: trackType[],
        filterList: trackType[],
        filtersName: string[]
    ) {
        let updatedFiltersName = [...filtersName];
        if (updatedFiltersName.includes(String(el))) {
            updatedFiltersName = updatedFiltersName.filter(
                (item) => item !== String(el)
            );
        } else {
            updatedFiltersName.push(String(el));
        }

        let filteredTracks = filterPlaylist.filter(
            (obj) =>
                updatedFiltersName.includes(obj.genre) ||
                updatedFiltersName.includes(obj.author) ||
                updatedFiltersName.includes(
                    String(extractYearsFromObject(obj.release_date))
                )
        );

        dispatch(
            setFilterList({
                tracksFilters: filteredTracks,
                filtersName: Array.from(new Set(updatedFiltersName)),
            })
        );
    }

    useEffect(() => {
        setFilterNumber(filtersName.length);
    }, [filtersName]);

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
                {filterNumber > 0 && title === activeTitle ? (
                    <div className={styles.filterNumber}>{filterNumber}</div>
                ) : null}
                {isOpen && (
                    <ul className={styles.trackList}>
                        <div className={styles.trackScroll}>
                            {list.map((el, index) => (
                                <li
                                    className={classNames(
                                        styles.trackListElement,
                                        {
                                            [styles.selectedItem]:
                                                filtersName.includes(
                                                    String(el)
                                                ),
                                        }
                                    )}
                                    key={index}
                                    onClick={() =>
                                        setFilters(
                                            el,
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
