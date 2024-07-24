interface TimeFormatProps {
    number: number | undefined;
}

export default function TimeFormat({ number }: TimeFormatProps) {
    if (number) {
        const minutes = Math.floor(number / 60);
        const seconds = number % 60;

        const formattedMinutes = minutes.toString().padStart(1, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");

        const result = `${formattedMinutes}:${formattedSeconds}`;

        return result;
    }
    if (!number) {
        const result = "0:00";
        return result;
    }
}
