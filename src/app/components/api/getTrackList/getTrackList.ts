const getTracksUrl = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

export default async function getTrackList() {
    const res = await fetch(getTracksUrl);

    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }

    return res.json();
}
