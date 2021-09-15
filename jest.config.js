module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  timers: 'legacy',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**'],
  modulePathIgnorePatterns: ['dist'],
  verbose: true
};
