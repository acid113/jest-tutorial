const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: [
    '<rootDir>/src/__tests__/**/*.ts'
  ]
}
module.exports = config;