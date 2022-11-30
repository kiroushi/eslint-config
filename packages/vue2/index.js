/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@kiroushi/eslint-config-vue3',
  ],

  rules: {
    // destroyed hook still applies to Vue 2.7 with options API
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-v-for-template-key-on-child': 'off',

    'vue/no-deprecated-dollar-listeners-api': 'warn',
    'vue/no-deprecated-dollar-scopedslots-api': 'warn',
  },
}
