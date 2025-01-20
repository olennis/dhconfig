module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // eslint-config-prettier를 마지막에 추가하여 다른 설정과의 충돌 방지
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // 여기에 커스텀 규칙을 추가하세요
    'react/react-in-jsx-scope': 'off',
    'no-console': "error"
  },
}; 