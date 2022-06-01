module.exports = {
  extends: [
    'react-app', // for editor
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    quotes: ['warn', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off',
    'prettier/prettier': [
      'off',
      {

      },
    ],
  },
}