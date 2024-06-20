"use client";

import FiltersItem from "./FiltersItem/FiltersItem";
import styles from "./Filters.module.css";
import classNames from "classnames";
import { useState } from "react";
import { filters } from "./data";

function Filters() {
    const [activeFilters, setActiveFilters] = useState<string | null>(null);

    function handleClick(el: string) {
        setActiveFilters((prev) => (prev === el ? null : el));
    }

    return (
        <div className={classNames(styles.centerBlockFilter, styles.filter)}>
            <div className={styles.filterTitle}>Искать по:</div>
            {filters.map((filter) => (
                <FiltersItem
                    isOpen={activeFilters === filter.title}
                    handleClick={handleClick}
                    title={filter.title}
                    list={filter.list}
                    key={filter.title}
                />
            ))}
        </div>
    );
}

export default Filters;
