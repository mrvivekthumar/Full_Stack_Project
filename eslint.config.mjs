import globals from "globals";
import pluginJs from "@eslint/eslint-plugin-js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended";

export default {
  overrides: [
    {
      files: ["*.js"],
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      plugins: ["js", "react"],
      extends: ["eslint:recommended", "plugin:react/recommended"],
      rules: {
        // Add custom rules here
      },
    },
  ],
  globals: {
    ...globals.browser,
    process,
  },
};
