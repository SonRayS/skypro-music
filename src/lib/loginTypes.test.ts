import fetchMock from "jest-fetch-mock";
import { postAuthUser } from "@/app/components/api/login/login";

// Определяем тип для ответа
type AuthUserResponse = {
    username: string;
    email: string;
    id: number;
};

// Настраиваем fetch-mock
fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe("postAuthUser", () => {
    it("должен успешно авторизовать пользователя и вернуть данные", async () => {
        // Задаем мок-данные
        const mockResponse: AuthUserResponse = {
            username: "biopop@gmail.com",
            email: "biopop@gmail.com",
            id: 4210,
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
            status: 200,
        });

        const response = await postAuthUser({
            email: "biopop@gmail.com",
            password: "9831azha-47",
        });

        // Проверяем, что полученные данные соответствуют типу AuthUserResponse
        expect(response).toEqual(mockResponse);
        expect(response).toHaveProperty("username", "biopop@gmail.com");
        expect(response).toHaveProperty("email", "biopop@gmail.com");
        expect(response).toHaveProperty("id", 4210);
    });
});
