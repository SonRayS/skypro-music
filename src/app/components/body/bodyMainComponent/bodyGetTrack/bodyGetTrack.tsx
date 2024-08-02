import React, { useEffect } from "react";
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
    setIsFavorite,
} from "@/store/features/playlistSlice";

type getTrackType = {
    tracksData: trackType[];
    params?: string | boolean;
    isFavorite?: boolean;
    onTrackUpdate?: () => void;
};

const BodyGetTrack = React.memo(
    ({ tracksData, params, isFavorite, onTrackUpdate }: getTrackType) => {
        const dispatch = useAppDispatch();
        const filterList = useAppSelector((state) => state.playlist.filterList);
        const filtersName = useAppSelector(
            (state) => state.playlist.filtersName
        );

        useEffect(() => {
            dispatch(setIsFavorite({ isFavorite }));
            dispatch(setFilterPlaylist({ filterPlaylist: tracksData }));
            dispatch(resetSearchFilters({ filterPlaylist: tracksData }));
        }, [dispatch, tracksData, isFavorite]);

        const filteredTracks = filtersName.length > 0 ? filterList : tracksData;

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

        return (
            <div
                className={classNames(
                    styles.mainCenterBlock,
                    styles.centerBlock
                )}
            >
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
                        ? "Нет треков :C"
                        : filteredTracks.map((el) => (
                              <TrackComponent
                                  key={el.id}
                                  track={el}
                                  tracksData={tracksData}
                                  isFavorite={isFavorite}
                                  onTrackUpdate={onTrackUpdate}
                              />
                          ))}
                </div>
            </div>
        );
    }
);

BodyGetTrack.displayName = "BodyGetTrack";

export default BodyGetTrack;
