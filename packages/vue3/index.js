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
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'error',
    'vue/this-in-template': 'error',

    'vue/attributes-order': 'error',
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      globals: [
        'Component',
        'RouterView',
        'RouterLink',
        'Transition',
        'TransitionGroup',
      ],
    }],
    'vue/component-options-name-casing': 'error',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/custom-event-name-casing': ['warn', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    'vue/no-restricted-component-options': ['error', 'mixins'],
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],

    // eslint-plugin-vue extension rules
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
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
    'vue/no-useless-concat': 'error',
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
    'vue/padding-lines-in-component-definition': ['error', {
      betweenOptions: 'always',
      withinOption: 'never',
      groupSingleLineProperties: true,
    }],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/template-curly-spacing': 'error',
  },
}
