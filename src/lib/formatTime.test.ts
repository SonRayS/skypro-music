import TimeFormat from "@/app/components/setTime/setTime";

describe("TimeFormat Component", () => {
    it("should correctly format 0 seconds", () => {
        const msec = 0;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("0:00");
    });

    it("should correctly format 1 second", () => {
        const msec = 1;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("0:01");
    });

    it("should correctly format large values", () => {
        const msec = 100000;
        const result = TimeFormat({ number: msec });
        expect(result).toBe("1666:40");
    });
});
