import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Импортируем дополнительные матчеры
import { describe, it, expect } from "vitest";
import TimeFormat from "../components/setTime/setTime";

describe("TimeFormat Component", () => {
    it("should correctly format 0 seconds", () => {
        const msec: number = 0;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("00:00");
    });

    it("should correctly format 1 second", () => {
        const msec: number = 1;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("00:01");
    });

    it("should correctly format large values", () => {
        const msec: number = 100000;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("1666:40");
    });
});
