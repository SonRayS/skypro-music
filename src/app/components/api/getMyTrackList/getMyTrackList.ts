export async function getFavoritesTracks(token: string) {
    const res = await fetch(
        "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!res.ok) {
        throw new Error(JSON.stringify(res.status));
    }
    const data = await res.json();
    return data;
}
