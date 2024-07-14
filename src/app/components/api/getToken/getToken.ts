const api_tokenUrl = "https://skypro-music-api.skyeng.tech/user/token/";

type tokenType = {
    email: string;
    password: string;
};

export const getTokens = async ({ email, password }: tokenType) => {
    const response = await fetch(api_tokenUrl, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    if (response.status === 400) {
        throw new Error("Неверный токен");
    } else if (!response.ok) {
        throw new Error("Заполните поля");
    }
    const responseData = response.json();
    return responseData;
};
