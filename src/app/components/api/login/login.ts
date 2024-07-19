const apiUrlLogin = "https://skypro-music-api.skyeng.tech/user/login/";

type SigninType = {
    email: string;
    password: string;
};

//Войти

export async function postAuthUser({ email, password }: SigninType) {
    const res = await fetch(apiUrlLogin, {
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
        throw new Error("Ошибка");
    }
    const data = await res.json();
    return data;
}
