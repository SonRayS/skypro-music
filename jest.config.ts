import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    preset: "ts-jest",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],

    moduleNameMapper: {
        "^@/components/(.*)$": "<rootDir>/components/$1",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

export default createJestConfig(config);
