"use client";
import { useAppSelector } from "@/hooks";
import styles from "./timePlayerControls.module.css";
import classNames from "classnames";
import { MouseEventHandler } from "react";

type AudioType = {
    togglePlay: () => void;
    isPlaying: boolean;
    repeat: boolean;
    handleClickRepeat: () => void;
    handleNextClick: () => void;
    handlePreviousClick: () => void;
    handleShuffleClick: MouseEventHandler<HTMLDivElement>;
};

function GetTimeControls({
    togglePlay,
    isPlaying,
    repeat,
    handleClickRepeat,
    handleNextClick,
    handlePreviousClick,
    handleShuffleClick,
}: AudioType) {
    const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
    return (
        <div className={styles.playerControls}>
            <div onClick={handlePreviousClick} className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                    <use href="/img/icon/sprite.svg#icon-prev" />
                </svg>
            </div>
            <div className={classNames(styles.playerBtnPlay, styles._btn)}>
                <svg className={styles.playerBtnPlaySvg} onClick={togglePlay}>
                    <use
                        href={`/img/icon/sprite.svg#icon-${
                            isPlaying ? "pause" : "play"
                        }`}
                    />
                </svg>
            </div>
            <div className={styles.playerBtnNext} onClick={handleNextClick}>
                <svg className={styles.playerBtnNextSvg}>
                    <use href="/img/icon/sprite.svg#icon-next" />
                </svg>
            </div>
            <div
                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
                onClick={handleClickRepeat}
            >
                <svg className={styles.playerBtnRepeatSvg}>
                    <use
                        href={`/img/icon/sprite.svg#icon-${
                            repeat ? "trackRepeat" : "repeat"
                        }`}
                    />
                </svg>
            </div>
            <div
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
                onClick={handleShuffleClick}
            >
                <svg className={styles.playerBtnShuffleSvg}>
                    <use
                        href={`/img/icon/sprite.svg#icon-${
                            isShuffle ? "shuffleActive" : "shuffle"
                        }`}
                    />
                </svg>
            </div>
        </div>
    );
}

export default GetTimeControls;
