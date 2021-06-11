'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended', 'plugin:node/recommended'],
      parserOptions: { ecmaVersion: 10, sourceType: "module" }
    },
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/indent': 0,
        'prefer-const': ['error', { destructuring: 'all' }],
        '@typescript-eslint/no-empty-function': 0,

        // TODO: enable it when all problems addressed
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/class-name-casing': 0,
        '@typescript-eslint/camelcase': 0
      }
    },
    {
      files: ['scripts/*.js', "test/**/*.{js,ts}"],
      rules:
        {
          "node/no-unsupported-features/es-syntax": 0
        }
    }
  ]
};
