/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: ['simple-import-sort'],
  extends: [
    'standard',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    '!.github',
    '!.vitepress',
    '!.vscode',
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
  ],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^\\u0000',
            '^vue$|vue-demi|vue/types.*|vue-router$|vuex$',
            '^[^.]',
            '^@/.*',
            '^[^.]',
            '^\\.',
          ],
        ],
      },
    ],

    'import/first': 'error',
    'import/newline-after-import': [
      'error',
      { count: 1, considerComments: true },
    ],
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',

    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    curly: [
      'error',
      'multi-line',
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-return-await': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
    ],
    'require-await': 'error',

    // TypeScript
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: [
        '*.json',
        '*.json5',
      ],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import',
            ],
          },
        ],
      },
    },
  ],
}
