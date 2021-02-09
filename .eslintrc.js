module.exports = {
    env: {
        browser: true,
        es2021: true,
        mocha: true,
    },
    extends: ['standard', 'plugin:wdio/recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {},
};
