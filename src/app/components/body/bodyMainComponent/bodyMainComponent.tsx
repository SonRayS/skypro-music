import Search from "../bodySearch/bodySearch";
import Filters from "../bodyFilters/Filters";
import TrackHeader from "../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyMainComponent.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";
import getTrackList from "../../api/getTrackList/getTrackList";
import { trackType } from "../../types";

async function Body() {
    const tracksResponse: trackType[] = await getTrackList();

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
                <Filters />
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
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;
