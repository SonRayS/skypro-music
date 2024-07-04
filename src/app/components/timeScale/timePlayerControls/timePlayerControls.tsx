"use client";
import styles from "./timePlayerControls.module.css";
import classNames from "classnames";
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
    function handleClick() {
        alert("Еще не реализовано");
    }

    return (
        <div className={styles.playerControls}>
            <div onClick={handleClick} className={styles.playerBtnPrev}>
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
            <div onClick={handleClick} className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                    <use href="/img/icon/sprite.svg#icon-next" />
                </svg>
            </div>
            <div
                onClick={handleClickRepeat}
                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
            >
                <svg className={styles.playerBtnRepeatSvg}>
                    <use
                        href={`/img/icon/sprite.svg#icon-${
                            repeat ? "repeat" : "trackRepeat"
                        }`}
                    />
                </svg>
            </div>
            <div
                onClick={handleClick}
                className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
            >
                <svg className={styles.playerBtnShuffleSvg}>
                    <use href="/img/icon/sprite.svg#icon-shuffle" />
                </svg>
            </div>
        </div>
    );
}

export default GetTimeControls;
