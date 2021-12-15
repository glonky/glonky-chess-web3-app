module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:json/recommended-with-comments',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'sort-keys-fix',
    'unused-imports',
    'prettier'
  ],
}
