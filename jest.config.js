module.exports = {
  "preset": "jest-preset-angular",
  "setupTestFrameworkScriptFile": "<rootDir>/configs/tests/setupJest.ts",
  "transform": {
    "^.+\\.js$": "babel-jest",
    '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  "globals": {
    "ts-jest": {
      "tsConfigFile": "src/tsconfig.spec.json"
    },
    "__TRANSFORM_HTML__": true
  },
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)?(x)",
    "**/+(*.)+(spec|test).+(ts|js)?(x)"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "html"
  ],
  "moduleNameMapper": {
    "app/(.*)": "<rootDir>/src/app/$1",
    "assets/(.*)": "<rootDir>/src/assets/$1",
    "environments/(.*)": "<rootDir>/src/environments/$1"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx)"
  ]
}
