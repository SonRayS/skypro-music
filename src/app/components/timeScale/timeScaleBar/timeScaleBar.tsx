"use client";
import styles from "./timeScaleBar.module.css";
import GetTimeControls from "../timePlayerControls/timePlayerControls";
import classNames from "classnames";
import ProgressBar from "../../progressBar/progressBar";
import { useTrackContext } from "../../context/useTrack";
import { trackType } from "../../types";
import { useState, useRef, useEffect } from "react";
import { ChangeEvent } from "react";

function TimeScale() {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const { track }: { track: trackType } = useTrackContext();
    console.log(currentTime);

    const audioRef = useRef<null | HTMLAudioElement>(null);

    const duration = audioRef.current?.duration;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", () =>
            setCurrentTime(audioRef.current!.currentTime)
        );
    }, []);

    const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            setCurrentTime(Number(event.target.value));
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    return (
        <>
            <div className={styles.bar}>
                <div className={styles.barContent}>
                    <audio ref={audioRef} src={track.track_file}></audio>
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
                                        <svg className={styles.trackPlaySvg}>
                                            <use href="/img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className={styles.trackPlayAuthor}>
                                        <a
                                            className={
                                                styles.trackPlayAuthorLink
                                            }
                                            href="http://"
                                        >
                                            {track.name}
                                        </a>
                                    </div>
                                    <div className={styles.trackPlayAlbum}>
                                        <a
                                            className={
                                                styles.trackPlayAlbumLink
                                            }
                                            href="http://"
                                        >
                                            {track.author}
                                        </a>
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
                                            className={styles.trackPlayLikeSvg}
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
                                        name="range"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TimeScale;
