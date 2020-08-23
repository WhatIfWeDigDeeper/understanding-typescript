module.exports = {
    moduleFileExtensions: [
      "ts",
      "js",
      "json"
    ],
    moduleDirectories: [
      "node_modules"
    ],
    transform: {
      "^.+\\.(ts)$": "ts-jest"
    },
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.json"
      }
    },
    rootDir: ".",
    testEnvironment: "node",
    testRegex: "src/.*/.*\\.spec\\.ts$",
    collectCoverageFrom: [
      "<rootDir>/src/**/*"
    ]
};
