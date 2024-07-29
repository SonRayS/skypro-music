import { userType } from "../../types";

const apiUrlUser = "https://skypro-music-api.skyeng.tech/user/";

const token = "token/";
const tokenRefresh = "token/refresh/";

type SigninType = {
    email: string;
    password: string;
};

//Получить токен

export async function postToken({ email, password }: SigninType) {
    const res = await fetch(apiUrlUser + token, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }
    const data = await res.json();
    return data;
}

//Обновить токен

export async function postRefreshToken({ refresh }: userType) {
    const res = await fetch(apiUrlUser + tokenRefresh, {
        method: "POST",
        body: JSON.stringify({
            refresh: refresh,
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }
    const data = await res.json();
    return data;
}
