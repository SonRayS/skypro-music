import { createAsyncThunk } from "@reduxjs/toolkit";

const api_loginUrl = "https://skypro-music-api.skyeng.tech/user/login/";

type authType = {
    email: string;
    password: string;
};

const accessToken = "token";

// Создание асинхронного экшена для получения данных пользователя
const getUser = createAsyncThunk(
    api_loginUrl, // Тип экшена
    async ({ email, password }: authType) => {
        // Асинхронная функция
        // Отправка POST-запроса к API для авторизации
        const response = await fetch(api_loginUrl, {
            method: "POST",
            body: JSON.stringify({ email, password }), // Передача данных пользователя
            headers: {
                "Content-Type": "application/json", // Установка заголовков
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Преобразование ответа в JSON
        const date = await response.json();

        // Проверка успешности запроса
        if (response.status === 401) {
            alert(`Error 401 :${date.detail}`);
            throw new Error(date.detail); // В случае ошибки выбрасывается исключение
        }

        return date; // Возвращение данных пользователя
    }
);

export default getUser;
