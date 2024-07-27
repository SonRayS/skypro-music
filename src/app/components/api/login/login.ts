const apiUrlUser = "https://skypro-music-api.skyeng.tech/user/login/";

type SigninType = {
    email: string;
    password: string;
};

export async function postAuthUser({ email, password }: SigninType) {
    try {
        const res = await fetch(apiUrlUser, {
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
            if (res.status === 400) {
                const errorData = await res.json();
                throw new Error(JSON.stringify(errorData));
            } else if (res.status === 401) {
                const errorData = await res.json();
                throw new Error(errorData.detail || "Ошибка авторизации");
            } else if (res.status === 500) {
                throw new Error("Сервер сломался");
            } else {
                throw new Error("Неизвестная ошибка");
            }
        }

        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
