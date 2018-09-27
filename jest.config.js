module.exports = {
  preset: "jest-preset-angular",
  setupTestFrameworkScriptFile: "<rootDir>/configs/tests/setupJest.ts",
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "NODE_ENV": "test"
  }
}
