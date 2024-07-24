import React from "react";

interface TimeFormatProps {
    number: number;
}

export default function TimeFormat({ number }: TimeFormatProps) {
    if (number) {
        const minutes = Math.floor(number / 60);
        const seconds = number % 60;

        const formattedMinutes = minutes.toString().padStart(1, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");

        return (
            <>
                {formattedMinutes}:{formattedSeconds}
            </>
        );
    }
}
