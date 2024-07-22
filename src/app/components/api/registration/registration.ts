//Зарегистрироваться

const apiUrlSignup =
    "https://webdev-music-003b5b991590.herokuapp.com/user/signup/";

type SignupType = {
    email: string;
    username: string;
    passwordfirst: string;
};

export async function postRegUser({ email, passwordfirst }: SignupType) {
    const res = await fetch(apiUrlSignup, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: passwordfirst,
            username: email,
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
