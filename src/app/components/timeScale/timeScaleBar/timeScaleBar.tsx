"use client";
import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";
import ProgressBar from "../../progressBar/progressBar";
import { useState, useRef, useEffect, MouseEventHandler } from "react";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    toggleShuffle,
    setNextTrack,
    setPreviousTrack,
    setIsPlaying,
    setCurrentTrack,
} from "@/store/features/playlistSlice";

export default function TimeScale() {
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.5);
    const [repeat, setRepeat] = useState<boolean>(false);
    const audioRef = useRef<null | HTMLAudioElement>(null);
    const duration = audioRef.current?.duration || 0;
    const audio = audioRef.current;
    const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
    const dispatch = useAppDispatch();
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const playlist = useAppSelector((state) => state.playlist.playlist);
    const shuffledPlaylist = useAppSelector(
        (state) => state.playlist.shuffledPlaylist
    );
    const activePlaylist = isShuffle ? shuffledPlaylist : playlist;

    const currentTrackIndex = useAppSelector(
        (state) => state.playlist.currentTrackIndex
    );

    setCurrentTrack({
        track: activePlaylist[currentTrackIndex!],
        tracksData: activePlaylist,
    });

    if (audio) {
        audio.loop = repeat;
    }

    function handleShuffleClick() {
        dispatch(toggleShuffle());
        dispatch(setIsPlaying(true));
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
                audioRef.current.play();
            }
        }
    };

    useEffect(() => {
        audio?.addEventListener("timeupdate", () =>
            setCurrentTime(audioRef.current!.currentTime)
        );
    }, [audio]);

    const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            setCurrentTime(Number(event.target.value));
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    const handleSetVolume = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            setVolume(Number(event.target.value));
            audioRef.current.volume = Number(event.target.value);
        }
    };

    useEffect(() => {
        dispatch(setIsPlaying(true));
        if (audioRef.current && currentTrackIndex !== null) {
            const audio = audioRef.current;

            audio.src = activePlaylist[currentTrackIndex]?.track_file || "";
            audio.loop = repeat;

            const handleEnded = () => {
                if (currentTrackIndex !== null) {
                    if (currentTrackIndex < activePlaylist.length - 1) {
                        dispatch(
                            setCurrentTrack({
                                track: activePlaylist[currentTrackIndex + 1],
                                tracksData: activePlaylist,
                            })
                        );
                    } else {
                        audio.pause();
                        dispatch(setIsPlaying(false));
                        dispatch(
                            setCurrentTrack({
                                track: activePlaylist[0],
                                tracksData: activePlaylist,
                            })
                        );
                    }
                }
            };

            audio.addEventListener("ended", handleEnded);

            const playAudio = async () => {
                try {
                    await audio.play();
                } catch (error) {
                    console.error("Ошибка воспроизведения трека: ", error);
                }
            };

            playAudio();

            return () => {
                audio.removeEventListener("ended", handleEnded);
                audio.pause();
            };
        }
    }, [currentTrackIndex, activePlaylist, repeat, dispatch]);

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
                            max={duration}
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
                                            onChange={handleSetVolume}
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
