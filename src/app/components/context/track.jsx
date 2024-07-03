"use client";
import { createContext, useState } from "react";

export const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
    const [track, setTrack] = useState([]);

    return (
        <TrackContext.Provider value={{ track, setTrack }}>
            {children}
        </TrackContext.Provider>
    );
};
