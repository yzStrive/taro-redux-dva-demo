module.exports = {
  root: true,
  extends: ['taro'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'taro/this-props-function': 0
  },
  parser: 'babel-eslint',
  plugins: ['prettier']
}
