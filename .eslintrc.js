module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:json/recommended-with-comments',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'unused-imports', 'jest', 'jest-formatting', 'prettier'],
  rules: {
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-const': 'error',
    'react/jsx-no-undef': 'off',
    'react/prop-types': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
  },
};
