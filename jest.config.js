const jestConfig = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup-env.js'],
}

module.exports = jestConfig
