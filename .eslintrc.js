module.exports = {
  root: true,
  extends: ['react-app'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        'react-hooks/exhaustive-deps': ['off'],
        'no-shadow': 'off',
        'no-undef': 'off',
        curly: 'off',
      },
    },
  ],
  env: {
    jest: true,
  },
}
