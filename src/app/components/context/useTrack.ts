import { useContext } from "react";
import { TrackContext } from "./track";

export function useTrackContext() {
    return useContext(TrackContext);
}
