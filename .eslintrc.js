module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "no-console": "warn",
    "eol-last": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "object-curly-newline": [
      "warn",
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
          minProperties: 3
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
          minProperties: 4
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4
        }
      }
    ]
  }
};