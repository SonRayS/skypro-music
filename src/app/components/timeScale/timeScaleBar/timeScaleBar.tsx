"use client";
import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";
import ProgressBar from "../../progressBar/progressBar";
import { useRef, useEffect, ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    toggleShuffle,
    setNextTrack,
    setPreviousTrack,
    setIsPlaying,
    setCurrentTrack,
    setVolume,
    setCurrentTime,
} from "@/store/features/playlistSlice";

export default function TimeScale() {
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const currentTime = useAppSelector((state) => state.playlist.currentTime);
    const volume = useAppSelector((state) => state.playlist.volume);
    const [repeat, setRepeat] = useState<boolean>(false);
    const audioRef = useRef<null | HTMLAudioElement>(null);
    const dispatch = useAppDispatch();
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const playlist = useAppSelector((state) => state.playlist.playlist);
    const currentTrackIndex = useAppSelector(
        (state) => state.playlist.currentTrackIndex
    );
    const isShuffle = useAppSelector((state) => state.playlist.isShuffle);

    useEffect(() => {
        if (currentTrackIndex !== null) {
            dispatch(
                setCurrentTrack({
                    track: playlist[currentTrackIndex],
                    tracksData: playlist,
                })
            );
        }
    }, [currentTrackIndex, playlist, dispatch]);

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;
            audio.loop = repeat;
            audio.src = playlist[currentTrackIndex!]?.track_file || "";

            const handleEnded = () => {
                if (isShuffle) {
                    const randomIndex = Math.floor(
                        Math.random() * playlist.length
                    );
                    dispatch(
                        setCurrentTrack({
                            track: playlist[randomIndex],
                            tracksData: playlist,
                        })
                    );
                } else {
                    if (currentTrackIndex! < playlist.length - 1) {
                        dispatch(setNextTrack());
                    } else {
                        dispatch(setIsPlaying(false));
                        dispatch(
                            setCurrentTrack({
                                track: playlist[0],
                                tracksData: playlist,
                            })
                        );
                    }
                }
            };

            const handleTimeUpdate = () => {
                dispatch(setCurrentTime(audio.currentTime));
            };

            const handleCanPlay = () => {
                if (isPlaying) {
                    audio.play().catch((error) => {
                        console.error("Ошибка воспроизведения трека: ", error);
                    });
                }
            };

            audio.addEventListener("ended", handleEnded);
            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("canplay", handleCanPlay);

            return () => {
                audio.removeEventListener("ended", handleEnded);
                audio.removeEventListener("timeupdate", handleTimeUpdate);
                audio.removeEventListener("canplay", handleCanPlay);
            };
        }
    }, [currentTrackIndex, playlist, repeat, isPlaying, isShuffle, dispatch]);

    function handleShuffleClick() {
        dispatch(toggleShuffle());
        if (!isPlaying && audioRef.current) {
            dispatch(setIsPlaying(true));
        }
    }

    function handleNextClick() {
        dispatch(setNextTrack());
        dispatch(setIsPlaying(false));
    }

    function handlePreviousClick() {
        dispatch(setPreviousTrack());
        dispatch(setIsPlaying(false));
    }

    function handleClickRepeat() {
        setRepeat((prevState) => !prevState);
    }

    const togglePlay = () => {
        if (currentTrack && audioRef.current) {
            if (isPlaying) {
                dispatch(setIsPlaying(false));
                audioRef.current.pause();
            } else {
                dispatch(setIsPlaying(true));
                audioRef.current.play().catch((error) => {
                    console.error("Ошибка воспроизведения трека: ", error);
                });
            }
        }
    };

    const handleSeek = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (audioRef.current) {
                const newTime = Number(event.target.value);
                audioRef.current.currentTime = newTime;
                dispatch(setCurrentTime(newTime));
            }
        },
        [dispatch]
    );

    const handleVolume = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (audioRef.current) {
                const newVolume = Number(event.target.value);
                audioRef.current.volume = newVolume;
                dispatch(setVolume(newVolume));
            }
        },
        [dispatch]
    );

    return (
        <>
            {currentTrack && (
                <div className={styles.bar}>
                    <div className={styles.barContent}>
                        <audio
                            ref={audioRef}
                            src={currentTrack.track_file}
                        ></audio>
                        <ProgressBar
                            max={audioRef.current?.duration || 0}
                            value={currentTime}
                            step={0.1}
                            onChange={handleSeek}
                        />
                        <div className={styles.barPlayerBlock}>
                            <div
                                className={classNames(
                                    styles.barPlayer,
                                    styles.player
                                )}
                            >
                                <GetTimeControls
                                    handleClickRepeat={handleClickRepeat}
                                    handleNextClick={handleNextClick}
                                    handlePreviousClick={handlePreviousClick}
                                    handleShuffleClick={handleShuffleClick}
                                    repeat={repeat}
                                    togglePlay={togglePlay}
                                    isPlaying={isPlaying}
                                />

                                <div
                                    className={classNames(
                                        styles.playerTrackPlay,
                                        styles.trackPlay
                                    )}
                                >
                                    <div className={styles.trackPlayContain}>
                                        <div className={styles.trackPlayImage}>
                                            <svg
                                                className={styles.trackPlaySvg}
                                            >
                                                <use href="img/icon/sprite.svg#icon-note" />
                                            </svg>
                                        </div>
                                        <div className={styles.trackPlayAuthor}>
                                            <span
                                                className={
                                                    styles.trackPlayAuthorLink
                                                }
                                            >
                                                {currentTrack.name}
                                            </span>
                                        </div>
                                        <div className={styles.trackPlayAlbum}>
                                            <span
                                                className={
                                                    styles.trackPlayAlbumLink
                                                }
                                            >
                                                {currentTrack.author}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.trackPlayLikeDis}>
                                        <div
                                            className={classNames(
                                                styles.trackPlayLike,
                                                styles._btnIcon
                                            )}
                                        >
                                            <svg
                                                className={
                                                    styles.trackPlayLikeSvg
                                                }
                                            >
                                                <use href="img/icon/sprite.svg#iconLike" />
                                            </svg>
                                        </div>
                                        <div
                                            className={classNames(
                                                styles.trackPlayDislike,
                                                styles._btnIcon
                                            )}
                                        >
                                            <svg
                                                className={
                                                    styles.trackPlayDislikeSvg
                                                }
                                            >
                                                <use href="/img/icon/sprite.svg#icon-dislike" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classNames(
                                    styles.barVolumeBlock,
                                    styles.volume
                                )}
                            >
                                <div className={styles.volumeContent}>
                                    <div className={styles.volumeImage}>
                                        <svg className={styles.volumeSvg}>
                                            <use href="/img/icon/sprite.svg#icon-volume" />
                                        </svg>
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.volumeProgress,
                                            styles._btn
                                        )}
                                    >
                                        <input
                                            className={classNames(
                                                styles.volumeProgressLine,
                                                styles._btn
                                            )}
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            name="range"
                                            value={volume}
                                            onChange={handleVolume}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
