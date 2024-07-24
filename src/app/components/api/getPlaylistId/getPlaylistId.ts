const apiUrlPlaylist =
    "https://skypro-music-api.skyeng.tech/catalog/selection/";

export async function getPlaylist(id: string) {
    const res = await fetch(apiUrlPlaylist + id, { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }

    const data = await res.json();
    return data.items;
}
