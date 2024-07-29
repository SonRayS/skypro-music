import fetchMock from "jest-fetch-mock";
import { postToken } from "@/app/components/api/token/token";

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
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMjU0MDAyLCJpYXQiOjE3MjIyNTM3MDIsImp0aSI6ImUzMzQ2NTk1YjIwOTQ3OGM5YjY2NzdkNjQ5Njc1ZDc4IiwidXNlcl9pZCI6NDIxMH0.-gCsPgusZhpuiM6TEqZLZZjazlf0mezp6FX9-hufjNc",
            access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMjM0MDEwMiwiaWF0IjoxNzIyMjUzNzAyLCJqdGkiOiIyZmNjNjgyNTJkZjU0N2M1ODIzMzQyY2I0MTAyZGFlMiIsInVzZXJfaWQiOjQyMTB9.JaTPSaKJeNHnKq0f8Zwyd-x_KrUG_E5YhOzl0Yqf-vg",
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
            status: 200,
        });

        const response = await postToken({
            email: "biopop@gmail.com",
            password: "9831azha-47",
        });

        // Проверяем, что полученные данные соответствуют типу TokenResponse
        expect(response.refresh.length).toBeGreaterThan(100);
        expect(response.access.length).toBeGreaterThan(100);
    });
});
