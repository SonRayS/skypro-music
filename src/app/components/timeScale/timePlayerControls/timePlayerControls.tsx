"use client";
import { setIsShuffle } from "@/store/features/playlistSlice";
import styles from "./timePlayerControls.module.css";
import classNames from "classnames";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";

type audioType = {
    togglePlay: () => void;
    isPlaying: boolean;
    repeat: boolean;
    handleClickRepeat: () => void;
};

function GetTimeControls({
    togglePlay,
    isPlaying,
    repeat,
    handleClickRepeat,
}: audioType) {
    const dispatch = useAppDispatch();
    const [shuffle, setShuffle] = useState<boolean>(false);

    function handleShuffleClick() {
        setShuffle((prevState) => !prevState);
        dispatch(setIsShuffle(shuffle));
    }

    return (
        <div className={styles.playerControls}>
            <div className={styles.playerBtnPrev}>
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
            <div className={styles.playerBtnNext}>
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
                onClick={handleShuffleClick}
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
            >
                <svg className={styles.playerBtnShuffleSvg}>
                    <use
                        href={`/img/icon/sprite.svg#icon-${
                            shuffle ? "shuffle" : "shuffleActive"
                        }`}
                    />
                </svg>
            </div>
        </div>
    );
}

export default GetTimeControls;
