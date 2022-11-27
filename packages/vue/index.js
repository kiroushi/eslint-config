/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'max-len': 'off',
      },
    },
  ],

  extends: [
    'plugin:vue/vue3-recommended',
    '@kiroushi/eslint-config-base',
  ],

  rules: {
    'vue/no-lone-template': 'error',
    'vue/no-mutating-props': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'error',
    'vue/this-in-template': 'error',

    // style
    'vue/attributes-order': 'error',
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
    }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/component-name-in-template-casing': 'error',
    'vue/component-options-name-casing': 'error',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/custom-event-name-casing': ['warn', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 9000,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'vue/no-useless-v-bind': 'error',
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error'],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/template-curly-spacing': 'error',

    // Vue 3 related rules
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/v-on-event-hyphenation': 'off',

    // These can only be re-enabled when using Vue 3
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-v-for-template-key-on-child': 'off',

    // Forward-compatible changes that need to be sorted out
    'vue/no-deprecated-dollar-listeners-api': 'warn',
    'vue/no-deprecated-dollar-scopedslots-api': 'warn',
    'vue/no-deprecated-events-api': 'warn',
    'vue/no-reserved-component-names': ['warn', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],
  },
}
