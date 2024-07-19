"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./FiltersItem.module.css";
import classNames from "classnames";
import { useState } from "react";
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
    const filterPlaylist = useAppSelector((el) => el.playlist.filterPlaylist);
    const filterList = useAppSelector((el) => el.playlist.filterList);

    function extractYearsFromObject(dateObj: string) {
        const date = new Date(dateObj);
        return date.getFullYear();
    }

    function setFilters(
        el: string | number,
        title: string,
        filterPlaylist: trackType[],
        filterList: trackType[]
    ) {
        handleClick(title);
        let filteredTracks = filterPlaylist.filter(
            (obj) =>
                obj.genre === el ||
                obj.author === el ||
                extractYearsFromObject(obj.release_date) === el
        );

        if (filterList.length === 0) {
            return dispatch(
                setFilterList({
                    tracksFilters: filteredTracks,
                })
            );
        } else {
            const addFilterTrack = Array.from(
                new Set(filteredTracks.concat(filterList))
            );
            return dispatch(
                setFilterList({
                    tracksFilters: addFilterTrack,
                })
            );
        }
    }

    return (
        <>
            <div className={styles.trackContainer}>
                <div
                    onClick={() => handleClick(title)}
                    className={classNames(
                        styles.filterButton,
                        styles.buttonAuthor,
                        isOpen ? styles.btnTextIsOpen : styles.btnText
                    )}
                >
                    <p>{title}</p>
                </div>
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
                                            filterList
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
