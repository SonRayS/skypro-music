"use client";
import FiltersItem from "./FiltersItem/FiltersItem";
import styles from "./Filters.module.css";
import classNames from "classnames";
import { useState } from "react";
import { trackType } from "../../types";

type Props = {
    tracks: trackType[];
};

function Filters({ tracks }: Props) {
    /* ------------------------------------time----------------------------------- */
    interface DateObject {
        dates: string[];
    }

    function extractYearsFromObject(dateObj: DateObject): number[] {
        return dateObj.dates.map((dateString) => {
            const date = new Date(dateString);
            return date.getFullYear();
        });
    }

    const dateObject: DateObject = {
        dates: Array.from(new Set(tracks.map((track) => track.release_date))),
    };

    const years = extractYearsFromObject(dateObject);
    /* ------------------------------------time----------------------------------- */
    /* ------------------------------------Sort----------------------------------- */

    interface Item {
        value: number;
    }

    function sortItemsByValue(items: number[]): number[] {
        return items.sort((a, b) => b - a);
    }

    const items: number[] = years;

    const sortedItems = sortItemsByValue(items);

    /* ------------------------------------Sort----------------------------------- */

    const filterData = [
        {
            title: "исполнителю",
            list: Array.from(new Set(tracks.map((track) => track.author))),
            value: "author",
        },
        {
            title: "году выпуска",
            list: sortedItems,
            value: "release",
        },
        {
            title: "жанру",
            list: Array.from(new Set(tracks.map((track) => track.genre))),
            value: "genre",
        },
    ];

    const [activeFilters, setActiveFilters] = useState<string | null>(null);

    function handleClick(el: string) {
        setActiveFilters((prev) => (prev === el ? null : el));
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

export default Filters;
