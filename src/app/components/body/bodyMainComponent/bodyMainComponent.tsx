import Search from "../bodySearch/bodySearch";
import Filters from "../bodyFilters/Filters";
import TrackHeader from "../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyMainComponent.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import getTrackList from "../../api/getTrackList/getTrackList";
import { trackType } from "../../types";

async function Body() {
    const tracks: trackType[] = await getTrackList();

    /* ________________________________________ */

    let tracksResponse: trackType[];

    try {
        tracksResponse = await getTrackList();
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        throw new Error(message);
    }

    /* ________________________________________ */

    return (
        <>
            <div
                className={classNames(
                    styles.mainCenterBlock,
                    styles.centerBlock
                )}
            >
                <Search />
                <h2 className={styles.centerBlockH2}>Треки</h2>
                <Filters tracks={tracks} />
                <div
                    className={classNames(
                        styles.centerBlockContent,
                        styles.playlistContent
                    )}
                >
                    <TrackHeader />
                    {tracksResponse.map((el) => (
                        <TrackComponent
                            key={el.id}
                            name={el.name}
                            author={el.author}
                            album={el.album}
                            el={el}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;
