export async function setLike(token: string, id: number) {
    const res = await fetch(
        `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (!res.ok) {
        throw new Error(
            JSON.stringify({ status: res.status, text: res.statusText })
        );
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function setDislike(token: string, id: number) {
    const res = await fetch(
        `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (!res.ok) {
        throw new Error(
            JSON.stringify({ status: res.status, text: res.statusText })
        );
    }
    const data = await res.json();
    console.log(data);
    return data;
}
