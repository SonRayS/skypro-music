"use client";
import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";
import ProgressBar from "../../progressBar/progressBar";
import { useState, useRef, useEffect } from "react";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    toggleShuffle,
    setNextTrack,
    setPreviousTrack,
} from "@/store/features/playlistSlice";

function TimeScale() {
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);
    const [repeat, setRepeat] = useState<boolean>(false);
    const audioRef = useRef<null | HTMLAudioElement>(null);
    const duration = audioRef.current?.duration || 0;
    const audio = audioRef.current;
    audio ? (audio.loop = repeat) : null;
    useAppSelector((state) => state.playlist.isShuffle);
    const dispatch = useAppDispatch();

    function handleShuffleClick() {
        dispatch(toggleShuffle());
    }

    function handleNextClick() {
        dispatch(setNextTrack());
    }

    function handlePreviousClick() {
        dispatch(setPreviousTrack());
    }

    function handleClickRepeat() {
        setRepeat((prevState) => !prevState);
    }

    const togglePlay = () => {
        if (currentTrack) {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.pause();
                } else {
                    audioRef.current.play();
                }
                setIsPlaying((prev) => !prev);
            }
        }
    };

    useEffect(() => {
        audio?.addEventListener("timeupdate", () =>
            setCurrentTime(audioRef.current!.currentTime)
        );
    }, [audio]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        currentTrack ? setIsPlaying(false) : setIsPlaying(true);
    }, [currentTrack]);

    const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            setCurrentTime(Number(event.target.value));
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    const handleSetVolume = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            setVolume(Number(event.target.value));
            audioRef.current.volume = Number(event.target.value);
        }
    };

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
                                                <use href="/img/icon/sprite.svg#icon-note" />
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

export default TimeScale;
