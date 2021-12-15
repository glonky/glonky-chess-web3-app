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
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'unused-imports', 'prettier'],
};
