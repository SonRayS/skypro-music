import fetchMock from "jest-fetch-mock";
import { postToken } from "../components/api/token/token"; // Укажите правильный путь к вашему модулю

// Определяем тип для ответа
type TokenResponse = {
    refresh: string;
    access: string;
};

describe("postToken", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("должен успешно получить токены и проверить длину токенов", async () => {
        // Задаем мок-данные
        const mockResponse: TokenResponse = {
            refresh:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTA0NjUzMSwiaWF0IjoxNjkwOTYwMTMxLCJqdGkiOiI2YTFhODg4Zjg5NjY0NjgyYTBmYWYyNjk4ZjZiNjViZSIsInVzZXJfaWQiOjc5Mn0.idHYiVKZqSxPCpNIvYpFgEs6nRTJ3FuPS60RAKV8XC8",
            access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTYwNDMxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4NDAwZjRkNWUzMTQ4NGJiMzE4YzUzMjE3Y2NhNWZmIiwidXNlcl9pZCI6NzkyfQ.SfvLYWbz72DQqWK7SyF4Yx9Zxx8hGsNxHEcwOU0RTk4",
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
            status: 200,
        });

        const response = await postToken({
            email: "gladiato2010@gmail.com",
            password: "9831azha-47",
        });

        // Проверяем, что полученные данные соответствуют типу TokenResponse
        expect(response.refresh.length).toBeGreaterThan(100);
        expect(response.access.length).toBeGreaterThan(100);
    });
});
