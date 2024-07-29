"use client";
import FiltersItem from "./FiltersItem/FiltersItem";
import styles from "./Filters.module.css";
import classNames from "classnames";
import { useState } from "react";
import { trackType } from "../../types";
import { setActiveTitle } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

type Props = {
    tracks: trackType[];
};

export default function Filters({ tracks }: Props) {
    const dispatch = useAppDispatch();
    const [activeFilters, setActiveFilters] = useState<string | null>(null);
    const activeTitle = useAppSelector((state) => state.playlist.activeTitle);

    /* ------------------------------------time----------------------------------- */

    function extractYearsFromObject(dateObj: string[]) {
        return dateObj.map((dateString) => {
            const date = new Date(dateString);
            return date.getFullYear();
        });
    }

    const dateObject = Array.from(
        new Set(tracks.map((track) => track.release_date))
    );

    const years = extractYearsFromObject(dateObject);
    /* ------------------------------------time----------------------------------- */
    /* ------------------------------------Sort----------------------------------- */

    function sortItemsByValue(items: number[]) {
        return items.sort((a, b) => b - a);
    }

    const sortedItems = sortItemsByValue(years);

    /* ------------------------------------Sort----------------------------------- */

    const filterData = [
        {
            title: "исполнителю",
            list: Array.from(new Set(tracks.map((track) => track.author))),
            value: "author",
        },
        {
            title: "году выпуска",
            list: Array.from(new Set(sortedItems)),
            value: "release",
        },
        {
            title: "жанру",
            list: Array.from(new Set(tracks.map((track) => track.genre))),
            value: "genre",
        },
    ];

    function handleClick(el: string) {
        if (activeTitle !== el) {
            dispatch(setActiveTitle({ activeTitle: el }));
            setActiveFilters(el);
        } else {
            dispatch(setActiveTitle({ activeTitle: null }));
            setActiveFilters(null);
        }
    }

    return (
        <div className={classNames(styles.centerBlockFilter, styles.filter)}>
            <div className={styles.filterTitle}>Искать по:</div>
            {filterData.map((el, index) => (
                <FiltersItem
                    key={index}
                    title={el.title}
                    list={el.list}
                    handleClick={handleClick}
                    isOpen={activeFilters === el.title}
                />
            ))}
        </div>
    );
}
