"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { trackType } from "@/app/components/types";
import TimeFormat from "@/app/components/setTime/setTime";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { useLikeTrack } from "@/app/components/hooks.ts/useLikeTrack";

type trackTypes = {
    track: trackType;
    tracksData: trackType[];
};

export default function TrackComponent({ track, tracksData }: trackTypes) {
    const dispatch = useAppDispatch();
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const { isLiked, handleLike } = useLikeTrack(track);

    function handleTrackClick() {
        isPlaying && currentTrack === null
            ? (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(false)))
            : (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(true)));
    }

    return (
        <>
            {currentTrack?.name === track.name ? (
                <div
                    onClick={handleTrackClick}
                    className={classNames(
                        styles.contentPlaylist,
                        styles.playlist
                    )}
                >
                    <div className={styles.playlistItem}>
                        <div
                            className={classNames(
                                styles.playlistTrack,
                                styles.track
                            )}
                        >
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    {isPlaying ? (
                                        <svg
                                            className={styles.trackActiveSvg}
                                            key="playing"
                                        >
                                            <use href="/img/icon/sprite.svg#icon-isPlaying" />
                                        </svg>
                                    ) : (
                                        <svg
                                            className={styles.trackTitleSvg}
                                            key="not-playing"
                                        >
                                            <use href="/img/icon/sprite.svg#icon-isPlaying" />
                                        </svg>
                                    )}
                                </div>
                                <div className={styles.trackTitleText}>
                                    <span className={styles.trackTitleLink}>
                                        {track.name}
                                        <span
                                            className={styles.trackTitleSpan}
                                        />
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
                                    onClick={handleLike}
                                >
                                    <use
                                        className={classNames(
                                            `${styles.useLike} ${
                                                isLiked && styles.iconLikeActive
                                            }`
                                        )}
                                        href={`/img/icon/sprite.svg#${
                                            isLiked
                                                ? "icon-like-active"
                                                : "icon-like"
                                        }`}
                                    />
                                </svg>
                                <span className={styles.trackTimeText}>
                                    <TimeFormat
                                        number={track.duration_in_seconds}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    onClick={handleTrackClick}
                    className={classNames(
                        styles.contentPlaylist,
                        styles.playlist
                    )}
                >
                    <div className={styles.playlistItem}>
                        <div
                            className={classNames(
                                styles.playlistTrack,
                                styles.track
                            )}
                        >
                            <div className={styles.trackTitle}>
                                <div className={styles.trackTitleImage}>
                                    <svg className={styles.trackTitleSvg}>
                                        <use href="/img/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackTitleText}>
                                    <span className={styles.trackTitleLink}>
                                        {track.name}
                                        <span
                                            className={styles.trackTitleSpan}
                                        />
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
                                    onClick={handleLike}
                                >
                                    <use
                                        className={classNames(
                                            `${styles.useLike} ${
                                                isLiked && styles.iconLikeActive
                                            }`
                                        )}
                                        href={`/img/icon/sprite.svg#${
                                            isLiked
                                                ? "icon-like-active"
                                                : "icon-like"
                                        }`}
                                    />
                                </svg>
                                <span className={styles.trackTimeText}>
                                    <TimeFormat
                                        number={track.duration_in_seconds}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
