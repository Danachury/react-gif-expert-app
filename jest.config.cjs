module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__tests/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/__tests__/__mocks__/']
}
