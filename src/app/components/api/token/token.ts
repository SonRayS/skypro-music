import { userType } from "../../types";

const apiUrlToken =
    "https://webdev-music-003b5b991590.herokuapp.com/user/token/";
const apiUtlTokenRefresh =
    "https://webdev-music-003b5b991590.herokuapp.com/user/token/refresh/";

type SigninType = {
    email: string;
    password: string;
};

//Получить токен

export async function postToken({ email, password }: SigninType) {
    const res = await fetch(apiUrlToken, {
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
    const res = await fetch(apiUtlTokenRefresh, {
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
