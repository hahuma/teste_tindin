module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/repositories/mongodbExports.js',
    '!src/useCases/index.js',
    '!src/controllers/index.js',
    '!src/config/consts.js',
    '!src/useCases/fakes/**',
    '!src/implementations.js',
    '!__tests__/**',
    '!src/server.js',
  ],
  modulePathIgnorePatterns: ['__tests__'],
  coverageDirectory: '__tests__/coverage',

  testTimeout: 10000,
};
