import Search from "../bodySearch/bodySearch";
import Filters from "../bodyFilters/Filters";
import TrackHeader from "../bodyTrackHeder/bodyTrackHeder";
import styles from "./bodyMainComponent.module.css";
import classNames from "classnames";
import TrackComponent from "./bodyTrackComponent/bodyTrackComponent";

function Body() {
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
                    <TrackComponent />
                </div>
            </div>
        </>
    );
}

export default Body;

/* export default async function HomePage() {
    const data = await getData();

    return <main> Некий контент </main>;
}
 */
