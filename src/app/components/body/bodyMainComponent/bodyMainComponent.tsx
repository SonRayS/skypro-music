import styles from "./bodyMainComponent.module.css";
import classNames from "classnames";
import getTrackList from "../../api/getTrackList/getTrackList";
import { trackType } from "../../types";
import BodyGetTrack from "./bodyGetTrack/bodyGetTrack";

async function Body() {
    const tracks: trackType[] = await getTrackList();

    let tracksResponse: trackType[];

    try {
        tracksResponse = await getTrackList();
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        throw new Error(message);
    }

    return (
        <>
            <div
                className={classNames(
                    styles.mainCenterBlock,
                    styles.centerBlock
                )}
            >
                <BodyGetTrack tracks={tracksResponse} />
            </div>
        </>
    );
}

export default Body;
