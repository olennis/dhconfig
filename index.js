module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error", // Prettier 오류를 ESLint로 표시
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }, // return문 앞에 빈 줄 추가
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" }, // 변수 선언 후 빈 줄 추가
      { blankLine: "always", prev: "*", next: "if" }, // if문 앞에 빈 줄 추가
    ],
  },
};
