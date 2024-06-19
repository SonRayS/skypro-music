"use client";

import FiltersItem from "./FiltersItem/FiltersItem";
import styles from "./Filters.module.css";
import classNames from "classnames";
import { useState } from "react";

function Filters() {
    const [activeFilters, setActiveFilters] = useState<string | null>(null);

    function handleClick(newFilter: string) {
        setActiveFilters((prev) => (prev === newFilter ? newFilter : null));
    }

    const Author = "исполнителю";
    const Release = "году выпуска";
    const Genre = "жанру";

    return (
        <div className={classNames(styles.centerBlockFilter, styles.filter)}>
            <div className={styles.filterTitle}>Искать по:</div>
            <FiltersItem
                isOpen={activeFilters === Author}
                handleClick={handleClick}
                title={Author}
                list={["Jon", "Smit"]}
            />
            <FiltersItem
                isOpen={activeFilters === Release}
                handleClick={handleClick}
                title={Release}
                list={["Jon", "Smit"]}
            />
            <FiltersItem
                isOpen={activeFilters === Genre}
                handleClick={handleClick}
                title={Genre}
                list={["Jon", "Smit"]}
            />
        </div>
    );
}

export default Filters;
