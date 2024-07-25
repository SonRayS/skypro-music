import fetchMock from "jest-fetch-mock";
import { postAuthUser } from "@/app/components/api/login/login";

// Определяем тип для ответа
type AuthUserResponse = {
    username: string;
    email: string;
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
            username: "gladiato2010@gmail.com",
            email: "gladiato2010@gmail.com",
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
            status: 200,
        });

        const response = await postAuthUser({
            email: "gladiato2010@gmail.com",
            password: "9831azha-47",
        });

        // Проверяем, что полученные данные соответствуют типу AuthUserResponse
        expect(response).toEqual(mockResponse);
        expect(response).toHaveProperty("username", "gladiato2010@gmail.com");
        expect(response).toHaveProperty("email", "gladiato2010@gmail.com");
    });
});
