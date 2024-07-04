import React from "react";

interface TimeFormatProps {
    number: number;
}

const TimeFormat: React.FC<TimeFormatProps> = ({ number }) => {
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;

    const formattedMinutes = minutes.toString().padStart(1, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return (
        <>
            {formattedMinutes}:{formattedSeconds}
        </>
    );
};

export default TimeFormat;
