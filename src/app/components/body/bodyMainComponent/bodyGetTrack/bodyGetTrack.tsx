"use client";
import Search from "../../bodySearch/bodySearch";
import Filters from "../../bodyFilters/Filters";
import TrackHeader from "../../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyGetTrack.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import { trackType } from "@/app/components/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    resetSearchFilters,
    setFilterPlaylist,
    setSearchFilters,
} from "@/store/features/playlistSlice";
import { useEffect, useMemo } from "react";

type getTrackType = {
    tracksData: trackType[];
    params?: string | boolean;
    isFavorite?: boolean;
};

export default function BodyGetTrack({
    tracksData,
    params,
    isFavorite,
}: getTrackType) {
    const dispatch = useAppDispatch();
    const filterList = useAppSelector((state) => state.playlist.filterList);
    const searchValue = useAppSelector((state) => state.playlist.searchValue);
    const filtersName = useAppSelector((state) => state.playlist.filtersName);
    let filteredTracks = filtersName.length > 0 ? filterList : tracksData;

    useEffect(() => {
        dispatch(setFilterPlaylist({ tracksData }));
        dispatch(resetSearchFilters());
    }, [dispatch, tracksData]);

    filteredTracks = searchValue
        ? filteredTracks.filter(
              (track) =>
                  track.album
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                  track.author
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                  track.genre.toLowerCase().includes(searchValue.toLowerCase())
          )
        : filteredTracks;

    let mainTitle = "";

    if (params) {
        if (params === "1") {
            mainTitle = "Плейлист дня";
        } else if (params === "2") {
            mainTitle = "100 танцевальных хитов";
        } else if (params === "3") {
            mainTitle = "Инди-заряд";
        } else {
            mainTitle = "Мой плейлист";
        }
    } else {
        mainTitle = "Треки";
    }

    const expensiveList = useMemo(() => {
        return filteredTracks.map((el) => (
            <TrackComponent
                key={el.id}
                track={el}
                tracksData={tracksData}
                isFavorite={isFavorite}
            />
        ));
    }, [filteredTracks, isFavorite, tracksData]);

    return (
        <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
            <Search />
            <h2 className={styles.centerBlockH2}>{mainTitle}</h2>
            <Filters tracks={tracksData} />
            <div
                className={classNames(
                    styles.centerBlockContent,
                    styles.playlistContent
                )}
            >
                <TrackHeader />
                {filteredTracks.length === 0
                    ? "Нет треков, удовлетворяющих условиям фильтра"
                    : expensiveList}
            </div>
        </div>
    );
}
