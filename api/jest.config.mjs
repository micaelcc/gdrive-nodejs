/*
 * For a detailed explanation regarding each configuration property, visit:
 * http
 */

export default {
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: "coerage",
  coverageProvider: "v8",
  coverageReporters: [
      "text",
      "lcov"
  ],
  testEnvironment: "node",
  coverageThreshould: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
      }
  },
  watchPartIgnorePatterns: [
      "node_modules"
  ],
  transformIgnorePatterns: ["node_modules"],
  collectCoverageFrom: [
      "src/**/*.js",
      "!src/**/index.js"
  ]
};
