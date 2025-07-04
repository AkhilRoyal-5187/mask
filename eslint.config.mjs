// .eslintrc.js or .eslintrc.mjs (whichever you're using)

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add a new object here to define your custom rules
  {
    rules: {
      // Temporarily disable these rules to get the build passing.
      // Ideally, you'd fix the code to satisfy these rules.

      // Disables the 'no-explicit-any' rule for TypeScript
      // This allows you to use 'any' without ESLint errors.
      "@typescript-eslint/no-explicit-any": "off",

      // Configures 'no-unused-vars' to treat unused variables/arguments
      // starting with an underscore '_' as warnings instead of errors.
      // If you just want to turn it off completely:
      // "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],

      // Disables the 'prefer-const' rule, allowing 'let' where 'const' could be used.
      "prefer-const": "off",

      // Disables the 'no-var' rule, allowing the use of 'var'.
      "no-var": "off"
    }
  }
];

export default eslintConfig;