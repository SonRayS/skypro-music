"use client";
import styles from "./bodyTrackComponent.module.css";
import classNames from "classnames";
import { trackType } from "@/app/components/types";
import TimeFormat from "@/app/components/setTime/setTime";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { setDislike, setLike } from "@/app/components/api/likes/likes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setAuthState, setUserData } from "@/store/features/authSlice";

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
    const router = useRouter();
    const userData = useAppSelector((state) => state.auth.userData);
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const [isLiked, setIsLiked] = useState(false);
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const { stared_user } = track;
    const isLikedByUser =
        isFavorite || stared_user.find((el) => el.id === userData.id);

    function handleTrackClick() {
        isPlaying && currentTrack === null
            ? (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(false)))
            : (dispatch(setCurrentTrack({ track, tracksData })),
              dispatch(setIsPlaying(true)));
    }

    const logout = () => {
        dispatch(setAuthState(false));
        dispatch(setUserData(null));
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    const handleLikeClick = (event: React.MouseEvent<SVGUseElement>) => {
        event.stopPropagation();

        isLiked
            ? setDislike(userData?.access, track.id)
                  .then(() => {})
                  .catch((error) => {
                      if (error) {
                          const errorData = JSON.parse(error.message);
                          if (errorData.status === 401) {
                              logout();
                              router.push("/signin");
                          }
                      }
                  })
            : setLike(userData?.access, track.id)
                  .then(() => {})
                  .catch((error) => {
                      if (error) {
                          const errorData = JSON.parse(error.message);
                          if (errorData.status === 401) {
                              logout();
                              router.push("/signin");
                          }
                      }
                  });
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        setIsLiked(!!isLikedByUser);
    }, [track, isFavorite, userData, isLikedByUser]);

    return (
        <>
            {currentTrack === track ? (
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
                                        <svg className={styles.trackActiveSvg}>
                                            <use href="/img/icon/sprite.svg#icon-isPlaying" />
                                        </svg>
                                    ) : (
                                        <svg className={styles.trackTitleSvg}>
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
                                <svg className={styles.trackTimeSvg}>
                                    <use
                                        className={classNames(
                                            `${styles.useLike} ${
                                                isLiked && styles.iconLikeActive
                                            }`
                                        )}
                                        onClick={handleLikeClick}
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
                                <svg className={styles.trackTimeSvg}>
                                    <use
                                        className={styles.useLike}
                                        onClick={handleLikeClick}
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
