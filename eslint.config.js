import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
          parser: typescriptParser,
          sourceType: "module",
      },
    },
    rules: {
      // override/add rules settings here
      'vue/multi-word-component-names': 'off',
      semi: "warn",
      "prefer-const": "warn",
    },
  },
];