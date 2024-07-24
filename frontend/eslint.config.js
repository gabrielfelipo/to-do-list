import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import globals from 'globals'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
]
