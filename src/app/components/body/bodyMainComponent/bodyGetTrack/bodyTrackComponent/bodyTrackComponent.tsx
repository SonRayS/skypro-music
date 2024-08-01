"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { trackType } from "@/app/components/types";
import TimeFormat from "@/app/components/setTime/setTime";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    dislike,
    getFavoriteTracks,
    setCurrentTrack,
    setIsPlaying,
} from "@/store/features/playlistSlice";
import { useLikeTrack } from "@/app/components/hooks.ts/useLikeTrack";
import { useEffect, useState } from "react";

type trackTypes = {
    track: trackType;
    tracksData: trackType[];
    isFavorite?: boolean;
};

export default function TrackComponent({
    track,
    tracksData,
    isFavorite,
}: trackTypes) {
    const dispatch = useAppDispatch();
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const logged = useAppSelector((state) => state.auth.authState);
    const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
    const isLiked = likedTracks.some((t) => t.id === track.id);
    const access = useAppSelector((state) => state.auth.userData.access);

    const { handleLike } = useLikeTrack(track, isFavorite);

    function handleTrackClick(event: React.MouseEvent) {
        event.stopPropagation();
        isPlaying && currentTrack === null
            ? (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(false)))
            : (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(true)));
    }

    async function handleLikeClick(event: React.MouseEvent) {
        event.stopPropagation();
        handleLike(event);
    }

    useEffect(() => {
        if (logged) {
            dispatch(getFavoriteTracks(access));
        }
    }, [logged, dispatch, access]);

    return (
        <div
            onClick={handleTrackClick}
            className={classNames(
                styles.contentPlaylist,
                styles.playlist,
                currentTrack?.name === track.name && styles.activeTrack
            )}
        >
            <div className={styles.playlistItem}>
                <div className={classNames(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            {isPlaying && currentTrack?.name === track.name ? (
                                <svg className={styles.trackActiveSvg}>
                                    <use href="/img/icon/sprite.svg#icon-isPlaying" />
                                </svg>
                            ) : (
                                <svg className={styles.trackTitleSvg}>
                                    <use href="/img/icon/sprite.svg#icon-note" />
                                </svg>
                            )}
                        </div>
                        <div className={styles.trackTitleText}>
                            <span className={styles.trackTitleLink}>
                                {track.name}
                                <span className={styles.trackTitleSpan} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <span className={styles.trackAuthorLink}>
                            {track.author}
                        </span>
                    </div>
                    <div className={styles.trackAlbum}>
                        <span className={styles.trackAlbumLink}>
                            {track.album}
                        </span>
                    </div>
                    <div className={styles.trackTime}>
                        <svg
                            className={styles.trackTimeSvg}
                            onClick={handleLikeClick}
                        >
                            <use
                                className={classNames(
                                    `${styles.useLike} ${
                                        logged &&
                                        isLiked &&
                                        styles.iconLikeActive
                                    }`
                                )}
                                href={`/img/icon/sprite.svg#${
                                    logged && isLiked
                                        ? "icon-like-active"
                                        : "icon-like"
                                }`}
                            />
                        </svg>

                        <span className={styles.trackTimeText}>
                            <TimeFormat number={track.duration_in_seconds} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
