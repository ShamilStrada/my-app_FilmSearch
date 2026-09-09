import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,js,tsx}'],
    //Рекомендованные правила
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended, //данное новшество заместо правил js везде ставит ts, поэтому в rules, тоже должно быть написано 
      
      //ts-eslint
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    //Правила, чтоб отключить ошибка с терн. оператором
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn', // отключает правило
    },
  },
]);
