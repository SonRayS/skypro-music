//Зарегистрироваться

const apiUrlSignup =
    "https://webdev-music-003b5b991590.herokuapp.com/user/signup/";

type SignupType = {
    email: string;
    username: string;
    passwordfirst: string;
};

export async function postRegUser({ email, passwordfirst }: SignupType) {
    try {
        const res = await fetch(apiUrlSignup, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: passwordfirst,
                username: email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            if (res.status === 400) {
                const errorData = await res.json();
                throw new Error(JSON.stringify(errorData));
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
